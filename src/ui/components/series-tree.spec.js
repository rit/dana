import Vue from 'vue'
import ElementUI from 'element-ui'
import SeriesTree from '@ui/components/series-tree'

describe('Series Tree', () => {
  beforeEach(() => {
    Vue.use(ElementUI)
  });

  it('acts like an accordion', () => {
    const vm = new Vue(SeriesTree).$mount()
    expect(vm.$el.textContent).to.contain('Loading')
  });

  it('asynchronously loads tree data')
  it('displays the collection label')
  it('limits to two level of sub-trees')
});
