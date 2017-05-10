var navTree = require('lib/transformer').navTree 

describe('navTree', () => {
  it('includes label', () => {
    var tree = navTree({});
    expect(tree).to.equal('hello')
  });
});
