import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import CollectionContent from '@ui/components/collection-content'
import swing from 'icemaker-swing'

Vue.use(ElementUI)
Vue.use(Vuex)

describe('Collection Content', () => {
  var vm

  beforeEach(() => {
    vm = vmFor(CollectionContent, {}).$mount()
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
