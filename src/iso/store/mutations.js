const mutations = {
  seriesTree (state, { seriesTree }) {
    state.seriesTree = seriesTree
  },

  collectionContent (state, { collectionContent }) {
    state.collectionContent = collectionContent
  },

  collectionHeading (state, { collectionHeading }) {
    state.collectionHeading = collectionHeading
  }
}

const state = {
  seriesTree: [],
  collectionContent: {},
  collectionHeading: {}
}

module.exports = {
  state,
  mutations
}
