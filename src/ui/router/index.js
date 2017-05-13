import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@ui/components/Hello'
import CollectionHome from '@ui/components/collection-home'
import SeriesTree from '@ui/components/series-tree'

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
