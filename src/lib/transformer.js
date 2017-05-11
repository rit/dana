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

function fetchCollection (url, fn) {
  axios.get(url)
    .then(fn)
    .catch(function (err) {
      console.log(err)
    })
}

module.exports = {
  navTree,
  fetchCollection
}
