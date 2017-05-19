module.exports = {
  collectionHeading (state, getters) {
    return slug => state.collectionHeading[slug]
  },

  seriesTree (state, getters) {
    return slug => state.seriesTree[slug]
  }
}
