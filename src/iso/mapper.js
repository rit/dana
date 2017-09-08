var axios = require('axios')
var { get, isString } = require('lodash')

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
  var pattern = /.+\/([\w-.]+)\/collection\.json$/
  var matched = url.match(pattern)
  if (matched) {
    return matched[1]
  }
  return null
}

function collectionHeading (data) {
  if (!data.metadata) {
    return {
      label: data.label
    }

  }

  var mapped = metadataMap(data.metadata)
  var physicalDesc = get(mapped, 'Physical Desc.', []).join(' ')
  var label = [data.label, mapped['Creation Date']].join(', ')
  var description = data['description']
  var arrangement = get(mapped, 'Arrangement', [])
  if (isString(arrangement)) {
    arrangement = [arrangement]
  }
  return {
    label,
    description,
    physicalDesc,
    arrangement
  }
}

function collectionContent (data) {
  var content = {}
  content.heading = collectionHeading(data)
  content.children = data.children.map(contentItem)
  return content
}

function contentItem (item) {
  var mapped = metadataMap(item.metadata)
  var label = [item.label, mapped['Creation Date']].join(' ')
  var container = get(mapped, 'Container', '').split(' ')
  var box = container[1]
  var folder = container[3]

  var slug = item.slug
  var type = item.type
  var isLeaf = type === 'sc:Manifest'
  var description = item.description
  return { label, slug, type, box, folder, isLeaf, description }
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
  collectionContent,
  fetchCollection
}
