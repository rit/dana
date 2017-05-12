import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import CollectionHome from '@/components/collection-home'
import SeriesTree from '@/components/series-tree'

Vue.use(Router)
Vue.component('series-tree', SeriesTree)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/collections/:collectionSlug',
      name: 'CollectionHome',
      component: CollectionHome
    }
  ]
})
