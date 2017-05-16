import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import SeriesTree from '@ui/components/series-tree'

describe('Series Tree', () => {
  var store

  beforeEach(() => {
    Vue.use(ElementUI)
    Vue.use(Vuex)
    store = new Vuex.Store({
      actions: {
        updateSeriesTree: function () {
        }
      }
    })
  });

  it('can bind seriesTreeSlug', () => {
    var propsData = { seriesTreeSlug: 'szeemann' }
    const vm = vmFor(SeriesTree, { store, propsData }).$mount()
    expect(vm.seriesTreeSlug).to.equal('szeemann')
  });

  it('loads series tree data after created', () => {
    var propsData = { seriesTreeSlug: 'szeemann' }
    const vm = vmFor(SeriesTree, { store, propsData }).$mount()
  })
  // it('displays the collection label')
  // it('limits to two level of sub-trees')
});

function vmFor (component, options) {
  var Comp = Vue.extend(component)
  var vm = new Comp(options)
  return vm
}
