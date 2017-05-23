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
    vm = vmFor(SeriesTree, { propsData }).$mount()
  });

  it('can bind seriesTree', () => {
    expect(vm.$el.textContent).to.contain('Szeemann')
  });

  it('renders series', (done) => {
    var node = vm.$el.querySelector('.el-tree-node__content')
    node.click()
    swing(vm.$nextTick(), done, () => {
      expect(vm.$el.querySelector('.el-tree-node').classList.contains('is-expanded')).to.be.ok
      // expect(tree.root.childNodes.length).to.equal(1)

      // expect(tree.root.childNodes[0].childNodes).to.equal(1)
    })
  })
});

function vmFor (component, options) {
  var Comp = Vue.extend(component)
  var vm = new Comp(options)
  return vm
}
