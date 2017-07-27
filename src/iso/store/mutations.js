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

  collections (state, { slug, collection}) {
    Vue.set(state.collections, slug, collection)
  },

  locations (state, { slug, _location }) {
    Vue.set(state.locations, slug, _location)
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
  locations: {},
  collectionContent: {},
  collectionHeading: {}
}

module.exports = {
  state,
  mutations
}
