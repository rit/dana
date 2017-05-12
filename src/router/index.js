import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import CollectionHome from '@/components/collection-home'

Vue.use(Router)

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
