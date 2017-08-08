import Vue from 'vue'
import moxios from 'moxios'
import swing from 'icemaker-swing'

import { vmFor } from '@ui/testing'
import initStore from 'iso/store'
import CollectionContent from '@ui/components/collection-content'

moxios.delay = 0


describe('Collection Content', () => {
  var vm
  var store

  beforeEach(() => {
    moxios.install()

    let data = { collectionSlug: 'szeemann' }
    store = initStore(Vue)
    vm = vmFor(CollectionContent, { propsData: data, store }).$mount()
  });

  afterEach(() => {
    moxios.uninstall()
  })

  it('shows the parent collection label', (done) => {
    moxios.wait(() => {
      const req = moxios.requests.mostRecent()
      const wire = req.respondWith({
        status: 200,
        response: require('@fixtures/subcollections.json')
      })

      swing(wire, done, () => {
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
