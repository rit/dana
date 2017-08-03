var { Range, parse } = require('iso/ranger')
var manifest = loadJsonFixture('gen_co_c.json')

describe('parse', () => {
  it('returns the top level ranges', () => {
    var root = parse(manifest)

    var labels = root.subranges.map(item => item.label)
    expect(labels).to.eql(['Papers', 'Color photograph'])
  })
})

describe('range', () => {
  it('has label attribute', () => {
    var root = parse(manifest)
    expect(root.label).to.equal('General correspondence:  C')
  })

  it('has nested subranges', () => {
    var root = parse(manifest)
    expect(root.subranges.length).to.equal(2)

    var papers = root.subranges[0]
    expect(papers.label).to.equal('Papers')
    expect(papers.subranges.length).to.equal(8)
  })
})
