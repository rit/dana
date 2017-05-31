const axios = require('axios')
const mapper = require('iso/mapper')

function updateCollectionMetaData ({ commit, state }, { slug }) {
  var url = `/static/${slug}.json`
  axios.get(url)
    .then((resp) => {
      var collectionHeading = mapper.collectionHeading(resp.data)
      commit('collectionHeading', { collectionHeading })
    })
    .catch((err) => console.warn(err))
}

function updateSeriesTree ({ commit, state }, { slug }) {
  var url = `static/navtree/${slug}.json`
  axios.get(url)
    .then((resp) => {
      var seriesTree = [resp.data]
      commit('seriesTree', { seriesTree })
    })
    .catch((err) => console.warn(err))
}

function updateCollectionContent ({ commit, state }, { slug }) {
  // Clear the collection content
  var collectionContent = {}
  commit('collectionContent', { collectionContent })

  var url = `/static/content/${slug}.json`
  axios.get(url)
    .then((resp) => {
      collectionContent = mapper.collectionContent(resp.data)
      commit('collectionContent', { collectionContent })
    })
    .catch((err) => console.warn(err))
}

module.exports = {
  updateCollectionMetaData,
  updateCollectionContent,
  updateSeriesTree
}
