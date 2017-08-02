class Range {
  constructor ({ label }) {
    this.label = label

    this.__class__ = this.constructor.name
  }
}

function parse(data) {
  var mapped = data.reduce((acc, item) => {
    id = item['@id']
    acc[id] = item
    return acc
  }, {})

  let root = data[0]
  root.subranges = root.ranges.map((id) => {
    let range = mapped[id]
    return new Range({ label: range['label'] })
  })
  return root.subranges
}
module.exports = {
  Range,
  parse
}
