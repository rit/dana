import Vue from 'vue'
import ElementUI from 'element-ui'
import CollectionTree from '@/components/collection-tree'

describe('Collection Tree', () => {
  beforeEach(() => {
    Vue.use(ElementUI)
  });

  it('acts like an accordion', () => {
    const vm = new Vue(CollectionTree).$mount()
    expect(vm.$el.textContent).to.contain('Level')
  });
});
