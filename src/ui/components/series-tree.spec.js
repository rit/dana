import Vue from 'vue'
import swing from 'icemaker-swing'

import { vmInit } from '@ui/testing'
import SeriesTree from '@ui/components/series-tree'


describe('Series Tree Sidebar', () => {
  var vm

  beforeEach(() => {
    var tree = require('@fixtures/series-tree')
    var propsData = { seriesTree: [tree] }
    var currentRoute = { path: '/test/123', matched: [{ regex: /test\/(\d+)/ }] }
    var parent = new Vue({ provide: { currentRoute }})
    vm = vmInit(SeriesTree, { propsData, parent })
  });


  it('accepts seriesTree from props', (done) => {
    swing(vm.$nextTick(), done, () => {
      expect(vm.$el.textContent).to.contain('Szeemann')
    })
  });

  it('can expand to show its children', (done) => {
    var node = vm.$el.querySelector('.el-tree-node__content')
    node.click()
    swing(vm.$nextTick(), done, () => {
      expect(vm.$el.querySelector('.el-tree-node').classList.contains('is-expanded')).to.be.ok
    })
  })
});
