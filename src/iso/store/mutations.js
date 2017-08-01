var Vue = require('vue/dist/vue.common')

const mutations = {
  collectionSlideOut (state, { collection }) {
    state.collectionSlideOut = collection
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
  }

}

const state = {
  collectionSlideOut: {},
  seriesTree: [],

  collections: {},
  subcollections: {},
  locations: {},
}

module.exports = {
  state,
  mutations
}
