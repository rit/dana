var Vue = require('vue/dist/vue.common')

const mutations = {
  collectionSlideOut (state, { collection }) {
    state.collectionSlideOut = collection
  },

  seriesTree (state, { seriesTree }) {
    state.seriesTree = seriesTree
  },

  imageViewerOptions (state, { manifestUri, canvasId }) {
    if (manifestUri) {
      Vue.set(state.imageViewerOptions, 'manifestUri', manifestUri)
    }

    if (canvasId) {
      Vue.set(state.imageViewerOptions, 'canvasId', canvasId)
    }
  },

  subcollections (state, { slug, collection }) {
    Vue.set(state.subcollections, slug, collection)
  },

  locations (state, { slug, _location }) {
    Vue.set(state.locations, slug, _location)
  },

  collection (state, { slug, collection }) {
    Vue.set(state.collections, slug, collection)
  }

}

const state = {
  collectionSlideOut: {},
  seriesTree: [],

  imageViewerOptions: {}, // for mirador
  collections: {},
  subcollections: {},
  locations: {}
}

module.exports = {
  state,
  mutations
}
