var axios = require('axios')

function navTree (data) {
  var transformed = {}
  transformed.label = data.label
  transformed['@id'] = data['@id']
  if (data.collections) {
    transformed.children = data.collections.map(node => navTree(node))
  } else {
    transformed.children = []
  }
  return transformed
}

function collectionHeading (data) {
  return {
    label: data.label,
    physicalDesc: data.physicalDesc
  }
}

function fetchCollection (url, fn) {
  axios.get(url)
    .then(fn)
    .catch(function (err) {
      console.log('fetchCollection error: ', err)
    })
}

module.exports = {
  navTree,
  collectionHeading,
  fetchCollection
}
