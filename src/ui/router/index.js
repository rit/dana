import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@ui/components/Hello'
import CollectionLayout from '@ui/components/collection-layout'
import CollectionHome from '@ui/components/collection-home'
import CollectionHeading from '@ui/components/collection-heading'
import CollectionContent from '@ui/components/collection-content'
import SeriesTree from '@ui/components/series-tree'

Vue.use(Router)

Vue.component('collection-content', CollectionContent)
Vue.component('collection-layout', CollectionLayout)
Vue.component('collection-heading', CollectionHeading)
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
      props: true,
      component: CollectionHome,
      children: [
        {
          path: '',
          props: true,
          component: CollectionContent
        },
        {
          path: 'series/:seriesSlug',
          props: true,
          name: 'SeriesHome',
          component: CollectionHome
        }
      ]
    }
  ]
})
