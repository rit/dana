const axios = require('axios')
const mapper = require('iso/mapper')

function updateCollectionMetaData ({ commit, state }, { slug }) {
  var url = `/api/v1/collections/${slug}`
  axios.get(url)
    .then((resp) => {
      var collectionHeading = mapper.collectionHeading(resp.data)
      commit('collectionHeading', { collectionHeading })
    })
    .catch((err) => console.warn(err))
}

function updateSeriesNavbar ({ commit, state }, { slug }) {
  if (!slug) return

  var url = `/api/v1/collections/${slug}`
  axios.get(url)
    .then((resp) => {
      var seriesNavbar = mapper.collectionHeading(resp.data)
      commit('seriesNavbar', { seriesNavbar })
    })
    .catch((err) => console.warn(err))
}

function updateSeriesTree ({ commit, state }, { slug }) {
  var url = `/api/v1/navtree/${slug}`
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

  var url = `/api/v1/collectiontree/${slug}`
  axios.get(url)
    .then((resp) => {
      collectionContent = mapper.collectionContent(resp.data)
      commit('collectionContent', { collectionContent })
    })
    .catch((err) => console.warn(err))
}

function appendCollectionContent({ commit, state}, { slug, paths, collection }) {
  var url = `/api/v1/collectiontree/${slug}`
  axios.get(url)
    .then((resp) => {
      var collectionContent = mapper.collectionContent(resp.data)
      commit('collectionContent', { collectionContent, paths, collection })
    })
    .catch((err) => console.warn(err))
}

function updateObjectDetails ({ commit, state }, { slug }) {
  var objectDetails = {}
  // TODO Clear the object details on
  // commit('reset', { objectDetails })
  // commit('objectDetails', { objectDetails })

  var url = `/static/iiif/manifests/${slug}/manifest.json`
  axios.get(url)
    .then((resp) => {
      objectDetails = resp.data
      commit('objectDetails', { objectDetails })
    })
    .catch((err) => console.warn(err))
}

function updateCollectionSlideOut ({ commit, state }, { collection }) {
  commit('collectionSlideOut', { collection })
}

module.exports = {
  updateObjectDetails,
  updateCollectionSlideOut,
  updateCollectionMetaData,
  updateCollectionContent,
  appendCollectionContent,
  updateSeriesNavbar,
  updateSeriesTree
}
