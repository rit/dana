import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import SeriesTree from '@ui/components/series-tree'
import swing from 'icemaker-swing'

Vue.use(ElementUI)
Vue.use(Vuex)

describe('Series Tree', () => {
  var vm

  beforeEach(() => {
    var tree = require('@fixtures/series-tree')
    var propsData = { seriesTree: [tree] }
    var currentRoute = { path: '/test/123', matched: [{ regex: /test\/(\d+)/ }] }
    var parent = new Vue({ provide: { currentRoute }})
    vm = vmFor(SeriesTree, { propsData, parent }).$mount()
  });

  it('can bind seriesTree', (done) => {
    swing(vm.$nextTick(), done, () => {
      expect(vm.$el.textContent).to.contain('Szeemann')
    })
  });

  it.skip('renders series', (done) => {
    var node = vm.$el.querySelector('.el-tree-node__content')
    node.click()
    swing(vm.$nextTick(), done, () => {
      expect(vm.$el.querySelector('.el-tree-node').classList.contains('is-expanded')).to.be.ok
    })
  })
});

function vmFor (component, options) {
  var Comp = Vue.extend(component)
  var vm = new Comp(options)
  return vm
}
