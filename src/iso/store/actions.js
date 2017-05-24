const axios = require('axios')
const mapper = require('iso/mapper')

function updateCollectionMetaData ({ commit, state }, { slug }) {
  var url = `/static/${slug}.json`
  axios.get(url)
    .then((resp) => {
      var collectionHeading = mapper.collectionHeading(resp.data)
      commit('collectionHeading', { collectionHeading })
    })
    .catch(function (err) {
      // TODO How do we update the UI?
      console.log(err)
    })
}

function updateSeriesTree ({ commit, state }, { slug }) {
  var url = `static/navtree/${slug}.json`
  axios.get(url)
    .then((resp) => {
      var seriesTree = [mapper.seriesTree(resp.data)]
      commit('seriesTree', { seriesTree })
    })
    .catch((err) => {
      console.log(err)
    })
}

function updateCollectionContent ({ commit, state }, { slug }) {
  var url = `/static/collections/${slug}.json`
  axios.get(url)
    .then((resp) => {
      var collectionContent = mapper.collectionContent(resp.data)
      commit('collectionContent', { collectionContent })
    })
    .catch(function (err) {
      // TODO How do we update the UI?
      console.log(err)
    })
}

module.exports = {
  updateCollectionMetaData,
  updateCollectionContent,
  updateSeriesTree
}
