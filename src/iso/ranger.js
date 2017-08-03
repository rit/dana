class Range {
  constructor ({ rangeDb, label, subranges, canvases }) {
    this.label = label

    if (subranges) this.subranges = subranges.map(id => mkRange({ rangeDb, id }))

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
    id = rec[key]
    acc[id] = rec
    return acc
  }, {})
}

function mkRange({ rangeDb, id }) {
  let record = rangeDb[id]
  return new Range({
    rangeDb,
    label: record['label'],
    subranges: record['ranges']
  })
}

function parse(manifest) {
  var rangeDb = lookupDb(manifest.structures, '@id')
  var canvasDb = lookupDb(manifest.sequences[0].canvases)

  let first = manifest.structures[0]
  let root = mkRange({ rangeDb, id: first['@id'] })
  return root
}

module.exports = {
  Range,
  parse
}
