const axios = require('axios')
const mapper = require('iso/mapper')

function updateCollectionMetaData ({ commit, state }, { slug }) {
  var url = `/static/${slug}.json`
  axios.get(url)
    .then((resp) => {
      var collectionHeading = mapper.collectionHeading(resp.data)
      commit('collectionHeading', { collectionHeading })
    })
    .catch(() => console.warn(url, 'not found'))
}

function updateSeriesTree ({ commit, state }, { slug }) {
  var url = `static/navtree/${slug}.json`
  axios.get(url)
    .then((resp) => {
      var seriesTree = [mapper.seriesTree(resp.data)]
      commit('seriesTree', { seriesTree })
    })
    .catch(() => console.warn(url, 'not found'))
}

function updateCollectionContent ({ commit, state }, { slug }) {
  // Clear the collection content
  var collectionContent = {}
  commit('collectionContent', { collectionContent })

  var url = `/static/collections/${slug}.json`
  axios.get(url)
    .then((resp) => {
      collectionContent = mapper.collectionContent(resp.data)
      commit('collectionContent', { collectionContent })
    })
    .catch(() => console.warn(url, 'not found'))
}

module.exports = {
  updateCollectionMetaData,
  updateCollectionContent,
  updateSeriesTree
}
