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

  collectionContent (state, { collectionContent }) {
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
  collectionContent: {},
  collectionHeading: {}
}

module.exports = {
  state,
  mutations
}
