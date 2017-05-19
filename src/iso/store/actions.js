const axios = require('axios')
const mapper = require('iso/mapper')

function updateCollectionMetaData ({ commit, state }, { slug }) {
  // get the meta data from the server
  // parse and commit the collection heading and series tree
  var url = `/static/${slug}.json`
  axios.get(url)
    .then((resp) => {
      var seriesTree = [mapper.seriesTree(resp.data)]
      var collectionHeading = mapper.collectionHeading(resp.data)
      commit('seriesTreeUpsert', { slug, seriesTree })
      commit('collectionHeadingUpsert', { slug, collectionHeading })
    })
    .catch(function (err) {
      // TODO How do we update the UI?
      console.log(err)
    })
}

module.exports = {
  updateCollectionMetaData
}
