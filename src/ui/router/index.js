import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@ui/components/Hello'
import CollectionLayout from '@ui/components/collection-layout'
import CollectionHome from '@ui/components/collection-home'
import CollectionHeading from '@ui/components/collection-heading'
import CollectionContent from '@ui/components/collection-content'
import SeriesTree from '@ui/components/series-tree'
import CollectionSummary from '@ui/components/collection-summary'
import CollectionContentTree from '@ui/components/collection-content-tree'

Vue.use(Router)

Vue.component('collection-content', CollectionContent)
Vue.component('collection-content-tree', CollectionContentTree)
Vue.component('collection-summary', CollectionSummary)
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
          meta: { collection: true },
          name: 'CollectionHome',
          component: CollectionContent
        },
        {
          path: 'series/:seriesSlug',
          props: true,
          component: CollectionContent,
          children: [
            {
              path: '',
              props: true,
              meta: { series: true },
              name: 'SeriesHome',
              component: CollectionContent
            },
            {
              path: 'subseries/:subseriesSlug',
              props: true,
              meta: { subseries: true },
              name: 'SubseriesHome',
              component: CollectionContent
            }
          ]
        }
      ]
    }
  ]
})
