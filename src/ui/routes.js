import Vue from 'vue'
import CollectionLayout from '@ui/components/collection-layout'
import CollectionHome from '@ui/components/collection-home'
import CollectionHeading from '@ui/components/collection-heading'
import CollectionContent from '@ui/components/collection-content'
import SeriesTree from '@ui/components/series-tree'
import CollectionSummary from '@ui/components/collection-summary'
import CollectionContentTree from '@ui/components/collection-content-tree'
import ContentItem from '@ui/components/content-item'
import ObjectHome from '@ui/components/object-home'
import LocationInCollection from '@ui/components/location-in-collection'
import ImageViewer from '@ui/components/image-viewer'
import SeriesNavbar from '@ui/components/series-navbar'
import SlideOut from '@ui/components/slide-out'

import Focus from '@ui/components/focus'

Vue.component('collection-content', CollectionContent)
Vue.component('content-item', ContentItem)
Vue.component('collection-content-tree', CollectionContentTree)
Vue.component('collection-summary', CollectionSummary)
Vue.component('collection-layout', CollectionLayout)
Vue.component('collection-heading', CollectionHeading)
Vue.component('series-tree', SeriesTree)
Vue.component('location-in-collection', LocationInCollection)
Vue.component('image-viewer', ImageViewer)
Vue.component('series-navbar', SeriesNavbar)
Vue.component('slide-out', SlideOut)

const routes = [
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
        path: 'objects/:objectSlug',
        props: { full: true },
        name: 'ObjectHome',
        components: {
          full: ObjectHome
        }
      },
      {
        path: 'series/:seriesSlug',
        props: { default: true, series: true },
        components: {
          default: CollectionContent
        },
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
  },
  {
    path: '/focus',
    component: Focus
  }
]

export default routes
