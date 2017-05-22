import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import SeriesTree from '@ui/components/series-tree'

Vue.use(ElementUI)
Vue.use(Vuex)

describe('Series Tree', () => {
  var vm

  beforeEach(() => {
    var tree = {
      label: 'Szeemann',
      children: [{
        label: 'Series 1',
        children: []
      }]
    }
    var propsData = { seriesTree: [tree] }
    vm = vmFor(SeriesTree, { propsData }).$mount()
  });

  it('can bind seriesTree', () => {
    expect(vm.$el.textContent).to.contain('Szeemann')
  });

  it('renders series', () => {
    expect(vm.$el.textContent).to.contain('Series 1')
  })
});

function vmFor (component, options) {
  var Comp = Vue.extend(component)
  var vm = new Comp(options)
  return vm
}
