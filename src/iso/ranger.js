class Range {
  constructor ({ db, label, subranges }) {
    this.label = label

    if (subranges) {
      this.subranges = subranges.map((id) => {
        let record = db[id]
        return new Range({
          db,
          label: record['label'],
          subranges: record['ranges']
        })
      })
    }

    this.__class__ = this.constructor.name
  }
}

function parse(data) {
  var db = data.reduce((acc, record) => {
    id = record['@id']
    acc[id] = record
    return acc
  }, {})

  let first = data[0]
  let root = new Range({
    db,
    label: first['label'],
    subranges: first['ranges']
  })
  return root
}
module.exports = {
  Range,
  parse
}
