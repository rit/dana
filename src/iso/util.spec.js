var { ellipsis } = require('iso/util')

describe('ellipsis', () => {
  it('truncates by character count', () => {
    var actual = ellipsis('hello there', 6)
    expect(actual).to.equal('hello')
  })

  it('preserve word boundary', () => {
    var actual = ellipsis('hello hello hello', 15)
    expect(actual).to.equal('hello hello')
  })

  it('removes trailing punctuations', () => {
    var actual = ellipsis('hello hello, hello', 15)
    expect(actual).to.equal('hello hello')
  })
})
