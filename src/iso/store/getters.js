var get = require('lodash').get

module.exports = {
  collectionHeading (state, getters) {
    return slug => state.collectionHeading[slug]
  },

  seriesTree (state, getters) {
    return slug => state.seriesTree[slug]
  },

  childCollectionsBySlug (state, getters) {
    return slug => {
      var collection = state.collections[slug] || {}
      return get(collection, 'children', [])
    }
  }
}
