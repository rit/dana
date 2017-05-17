import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import sinon from 'sinon'
import SeriesTree from '@ui/components/series-tree'

Vue.use(ElementUI)
Vue.use(Vuex)

describe('Series Tree', () => {
  var store
  var updateSeriesTree

  beforeEach(() => {
    updateSeriesTree = sinon.spy()
    store = new Vuex.Store({
      actions: {
        updateSeriesTree
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
    vmFor(SeriesTree, { store, propsData }).$mount()
    expect(updateSeriesTree).to.have.been.called
  })

  // it('displays the collection label')
  // it('limits to two level of sub-trees')
});

function vmFor (component, options) {
  var Comp = Vue.extend(component)
  var vm = new Comp(options)
  return vm
}
