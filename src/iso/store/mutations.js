const mutations = {
  seriesTree (state, { slug, seriesTree }) {
    state.seriesTree = seriesTree
  },

  collectionHeading (state, { collectionHeading }) {
    state.collectionHeading = collectionHeading
  }
}

const state = {
  seriesTree: [],
  collectionHeading: {}
}

module.exports = {
  state,
  mutations
}
