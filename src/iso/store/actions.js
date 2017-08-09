const axios = require('axios')
const mapper = require('iso/mapper')

function updateSeriesTree ({ commit, state }, { slug }) {
  var url = `/api/v1/navtree/${slug}`
  axios.get(url)
    .then((resp) => {
      var seriesTree = [resp.data]
      commit('seriesTree', { seriesTree })
    })
    .catch((err) => console.warn(err))
}

function fetchSubcollections ({ commit, state }, { slug, resolve }) {
  var url = `/api/v1/collectiontree/${slug}`
  axios.get(url)
    .then((resp) => {
      var collection = mapper.collectionContent(resp.data)
      commit('subcollections', { slug, collection })
      if (resolve) {
        resolve(collection.children)
      }
    })
    .catch((err) => console.warn(err))
}

function fetchCollection ({ commit, state }, { slug }) {
  if (!slug) return

  var url = `/api/v1/collections/${slug}`
  axios.get(url)
    .then((resp) => {
      var collection = resp.data
      commit('collection', { slug, collection })
    })
    .catch((err) => console.warn(err))
}

function updateCollectionSlideOut ({ commit, state }, { collection }) {
  commit('collectionSlideOut', { collection })
}

function fetchObjectLocation ({ commit, state }, { slug }) {
  var url = `/api/v1/objects/${slug}/location`
  axios.get(url)
    .then((resp) => {
      var _location = resp.data
      commit('locations', { slug, _location })
    })
    .catch((err) => console.warn(err))
}

module.exports = {
  fetchObjectLocation,
  fetchCollection,
  fetchSubcollections,
  updateCollectionSlideOut,
  updateSeriesTree
}
