import Vue from 'vue'
import moxios from 'moxios'
import swing from 'icemaker-swing'

import { vmInit } from '@ui/util'
import initStore from 'iso/store'
import CollectionContent from '@ui/components/collection-content'


describe('Collection Tree Content', () => {
  var vm
  var store

  beforeEach(() => {
    moxios.install()

    let data = { collectionSlug: 'szeemann' }
    store = initStore(Vue)
    vm = vmInit(CollectionContent, { propsData: data, store })
  });

  afterEach(() => {
    moxios.uninstall()
  })

  it('shows the parent collection label', (done) => {
    moxios.stubRequest(/api\/v1\/collectiontree.*/, {
      status: 200,
      responseText: require('@fixtures/subcollections.json')
    })

    moxios.wait(() => {
      swing(vm.$nextTick(), done, () => {
        expect(vm.$el.textContent).to.contain('Harald Szeemann papers 2011.M.30, 1800-2011, bulk 1949-2005')
      })
    }, 0)
  });

  it('shows nested subcollections', (done) => {
    moxios.stubRequest(/api\/v1\/collectiontree.*/, {
      status: 200,
      responseText: require('@fixtures/subcollections.json')
    })

    moxios.wait(() => {
      var node = vm.$el.querySelector('.el-tree-node__content')
      node.click()
      swing(vm.$nextTick(), done, () => {
        expect(vm.$el.querySelector('.el-tree-node').classList.contains('is-expanded')).to.be.ok
      })
    }, 0)

  })
});
