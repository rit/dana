var axios = require('axios')

function seriesTree (data) {
  var transformed = {}
  transformed.label = data.label
  transformed.slug = extractSlug(data['@id'])
  transformed['@id'] = data['@id'] // We should not need this
  if (data.collections) {
    transformed.children = data.collections.map(node => seriesTree(node))
  } else {
    transformed.children = []
  }
  return transformed
}

function extractSlug (url) {
  var pattern = /http:\/\/data\.getty\.edu\/iiif\/collection\/([\w-.]+)\/collection\.json/
  var matched = url.match(pattern)
  if (matched) {
    return matched[1]
  }
  return null
}

function collectionHeading (data) {
  if (!data.metadata) {
    throw new Error('Collection has no metadata')
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
  seriesTree,
  metadataMap,
  extractSlug,
  collectionHeading,
  fetchCollection
}
