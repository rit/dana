const mutations = {
  objectDetails (state, { objectDetails }) {
    state.objectDetails = objectDetails
  },

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
  objectDetails: {},
  seriesTree: [],
  collectionContent: {},
  collectionHeading: {}
}

module.exports = {
  state,
  mutations
}
