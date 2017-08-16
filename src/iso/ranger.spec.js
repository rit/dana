'use strict';

var _ = require('lodash')
var { parse } = require('iso/ranger')
var manifest = loadJsonFixture('gen_co_c.json')
var liveInYourHead = loadJsonFixture('live_in_your_head.json')

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

  it('groups nested sub-subrange', () => {
    var root = parse(liveInYourHead)
    expect(root.label).to.equal('Live in Your Head: When Attitudes Become Form, 1969')

    let ranges = root.subranges
    let michaelHeizer = ranges.find(r => r.label.match(/Michael Heizer/))
    expect(michaelHeizer.label).to.equal('Michael Heizer')
    expect(michaelHeizer.subranges.length).to.equal(2)
    let [bwPhotos, bwNegatives] = michaelHeizer.subranges
    expect(bwPhotos.label).to.equal('Black-and-white photographs')
    expect(bwPhotos.canvases).to.be.undefined
    expect(bwPhotos.nestedCanvas).to.equal(true)

    expect(bwNegatives.nestedCanvas).to.equal(false)
  })
})
