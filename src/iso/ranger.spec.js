var { Range, parse } = require('iso/ranger')
var manifest = loadJsonFixture('gen_co_c.json')

describe('parse', () => {
  it('returns the top level ranges', () => {
    var actual = parse(manifest.structures)
    expect(actual).to.eql([
        new Range({ label: 'Papers' }),
        new Range({ label: 'Color photograph' })
    ])
  })
})
