var Vue = require('vue/dist/vue.common')

const mutations = {
  seriesNavbar (state, { seriesNavbar }) {
    state.seriesNavbar = seriesNavbar
  },

  collectionSlideOut (state, { collection }) {
    state.collectionSlideOut = collection
  },

  objectDetails (state, { objectDetails }) {
    state.objectDetails = objectDetails
  },

  seriesTree (state, { seriesTree }) {
    state.seriesTree = seriesTree
  },

  subcollections (state, { slug, collection}) {
    Vue.set(state.subcollections, slug, collection)
  },

  locations (state, { slug, _location }) {
    Vue.set(state.locations, slug, _location)
  },

  collection (state, { slug, collection }) {
    Vue.set(state.collections, slug, collection)
  },

  collectionContent (state, { collection, collectionContent }) {
    if (collection) {
      Vue.set(collection, 'children', collectionContent.children)
      return
    }
    state.collectionContent = collectionContent
  },

  collectionHeading (state, { collectionHeading }) {
    state.collectionHeading = collectionHeading
  }
}

const state = {
  collectionSlideOut: {},
  seriesNavbar: {},
  objectDetails: {},
  seriesTree: [],
  collections: {},
  subcollections: {},
  locations: {},
  collectionContent: {},
  collectionHeading: {}
}

module.exports = {
  state,
  mutations
}
