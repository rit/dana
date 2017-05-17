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
  if (!data.metadata) {
    return {}
  }
  var mapped = metadataMap(data.metadata)
  var physicalDesc = mapped['Physical Desc.'].join(' ')
  var label = [data.label, mapped['Creation Date']].join(', ')
  return {
    label,
    physicalDesc
  }
}

// metadata is an array
// we need to index it by label name
function metadataMap (metadata) {
  return metadata.reduce((acc, item) => {
    acc[item.label] = item.value
    return acc
  }, {})
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
  metadataMap,
  collectionHeading,
  fetchCollection
}
