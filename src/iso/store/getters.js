module.exports = {
  collectionHeading (state, getters) {
    return slug => state.collectionHeading[slug]
  },

  seriesTree (state, getters) {
    return slug => state.seriesTree[slug]
  },

  locationBySlug(state, getters) {
    return slug => {
      return state.locations[slug] || []
    }
  },

  collectionBySlug (state, getters) {
    return slug => {
      return state.collections[slug] || {}
    }
  },

  subcollectionsBySlug (state, getters) {
    return slug => {
      return state.subcollections[slug] || {}
    }
  }
}
