var _ = require('lodash')
var { parse } = require('iso/ranger')
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

  it('has canvas', () => {
    var root = parse(manifest)
    var papers = root.subranges[0]
    var ca = papers.subranges[0]
    var canvases = ca.canvases
    expect(ca.label).to.eql('CA')
    expect(canvases[0].label).to.equal('Image 001')

    var imageUrl = '//media.getty.edu/iiif/research/archives/2011m30_ref234462_3rn_FL2292185_thumb/full/full/0/default.jpg'

    expect(canvases[0].thumbnail['@id']).to.contain(imageUrl)

    expect(_.last(canvases).label).to.equal('Image 054')
  })

  it('has nested subranges', () => {
    var root = parse(manifest)
    expect(root.subranges.length).to.equal(2)

    var papers = root.subranges[0]
    expect(papers.label).to.equal('Papers')
    expect(papers.subranges.length).to.equal(8)
  })
})
