import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@ui/components/Hello'
import CollectionHome from '@ui/components/collection-home'
import SeriesTree from '@ui/components/series-tree'
import Layout from '@ui/components/layout'

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
      path: '/layout',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/collections/:collectionSlug',
      name: 'CollectionHome',
      component: CollectionHome
    }
  ]
})
