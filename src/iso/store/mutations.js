var Vue = require('vue/dist/vue.common')
var { pickBy } = require('lodash')

// NOTE: `Vue.set` pattern only works for adding key-value pair when the key is new
// To update the value for an existing key, use Object.assign pattern


const mutations = {
  collectionSlideOut (state, { collection }) {
    state.collectionSlideOut = collection
  },

  seriesTree (state, { seriesTree }) {
    state.seriesTree = seriesTree
  },

  miradorInstance (state, { miradorInstance }) {
    state.miradorInstance = miradorInstance
  },

  imageViewerOptions (state, { manifestUri, canvasId }) {
    let values = pickBy({ manifestUri, canvasId }) // Remove falsy values
    state.imageViewerOptions = Object.assign({}, state.imageViewerOptions, values)
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
  miradorInstance: null,
  collections: {},
  subcollections: {},
  locations: {}
}

module.exports = {
  state,
  mutations
}
