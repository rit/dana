'use strict'

var { includes } = require('lodash')
var { metadataMap } = require('iso/mapper')


class Range {
  constructor ({ rangeDb, canvasDb, label, subranges, canvases, metadata, description, parent }) {
    this.label = label
    this.metadata = metadata
    this.description = description
    this.parent = parent
    this.nestedCanvas = false

    let mapped = metadataMap(metadata || [])
    this.container = mapped['Container']

    if (subranges) {
      this.subranges = subranges.map(id => mkRange({ rangeDb, canvasDb, id, parent: this }))
    }

    if (canvases) {
      this.canvases = canvases.map((id) => {
        var rec = canvasDb[id]
        return new Canvas(rec)
      })
    }

    if (this.parent && this.canvases) {
      let found = this.canvases.find(item => {
        if (item.label.startsWith('Recto') || item.label.startsWith('Verso')) {
          return true
        }
        return false
      })
      this.parent.nestedCanvas = !!found
    }

    this.__class__ = this.constructor.name
  }

}

class Canvas {
  constructor ({ label, thumbnail, images }) {
    this.label = label
    this.thumbnail = thumbnail
    this.images = images

    this.__class__ = this.constructor.name
  }
}

function lookupDb (records, key) {
  return records.reduce((acc, rec) => {
    const id = rec[key]
    acc[id] = rec
    return acc
  }, {})
}

function mkRange ({ rangeDb, canvasDb, id, parent }) {
  const record = rangeDb[id]
  return new Range({
    rangeDb,
    canvasDb,
    parent,
    label: record['label'],
    description: record['description'],
    metadata: record['metadata'],
    subranges: record['ranges'],
    canvases: record['canvases']
  })
}

function parse (manifest) {
  var rangeDb = lookupDb(manifest.structures, '@id')
  var canvasDb = lookupDb(manifest.sequences[0].canvases, '@id')

  const rootId = manifest.structures[0]['@id']
  const root = mkRange({ rangeDb, canvasDb, id: rootId, parent: null })
  return root
}

module.exports = {
  Range,
  parse
}
