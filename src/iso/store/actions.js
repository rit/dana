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

module.exports = {
  updateCollectionMetaData
}
