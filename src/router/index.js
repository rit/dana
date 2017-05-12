import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import CollectionTree from '@/components/collection-tree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/collections/:slug',
      name: 'CollectionTree',
      component: CollectionTree
    }
  ]
})
