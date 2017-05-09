import Vue from 'vue'
import ElementUI from 'element-ui'
import CollectionTree from '@/components/collection-tree'

describe('Collection Tree', () => {
  it('acts like an accordion', () => {
    Vue.use(ElementUI)
    const vm = new Vue(CollectionTree).$mount()
    expect(vm.$el.textContent).to.contain('Level')
  });
});
