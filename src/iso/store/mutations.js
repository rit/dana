function collectionHeadingUpsert (state, { slug, collectionHeading }) {
  state.collectionHeading[slug] = collectionHeading
}

function seriesTreeUpsert (state, { slug, seriesTree }) {
  state.seriesTree[slug] = seriesTree
}

const mutations = {
  seriesTreeUpsert,
  collectionHeadingUpsert
}

const state = {
  seriesTree: {},
  collectionHeading: {}
}

module.exports = {
  state,
  mutations
}
