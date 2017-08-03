'use strict'

class Range {
  constructor ({ rangeDb, canvasDb, label, subranges, canvases }) {
    this.label = label

    if (subranges) {
      this.subranges = subranges.map(id => mkRange({ rangeDb, canvasDb, id }))
    }

    if (canvases) {
      this.canvases = canvases.map((id) => {
        var rec = canvasDb[id]
        return new Canvas(rec)
      })
    }

    this.__class__ = this.constructor.name
  }
}


class Canvas {
  constructor ({ label, thumbnail }) {
    this.label = label
    this.thumbnail = thumbnail

    this.__class__ = this.constructor.name
  }
}


function lookupDb (records, key) {
  return records.reduce((acc, rec) => {
    let id = rec[key]
    acc[id] = rec
    return acc
  }, {})
}

function mkRange({ rangeDb, canvasDb, id }) {
  let record = rangeDb[id]
  let label = record['label']
  return new Range({
    rangeDb,
    canvasDb,
    label: record['label'],
    subranges: record['ranges'],
    canvases: record['canvases']
  })
}

function parse(manifest) {
  var rangeDb = lookupDb(manifest.structures, '@id')
  var canvasDb = lookupDb(manifest.sequences[0].canvases, '@id')

  let rootId = manifest.structures[0]['@id']
  let root = mkRange({ rangeDb, canvasDb, id: rootId })
  return root
}

module.exports = {
  Range,
  parse
}
