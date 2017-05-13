var loadJsonFixture = require('./load-json');
var navTree = require('iso/transformer').navTree

describe('navTree', () => {
  var data
  var root

  before(() => {
    data = loadJsonFixture('sample-collection.json')
  })

  beforeEach(() => {
    root = navTree(data)
  });

  describe('root node', () => {
    it('has a label', () => {
      root = navTree(data);
      expect(root.label).to.equal('Harald Szeemann papers')
    });

    it('has an @id', () => {
      expect(root['@id']).to.contain('2011m30')
    });

    it('has a list of child nodes', () => {
      var child = root.children[0]
      expect(child.label).to.contain('Series I.')
      expect(child['@id']).to.contain('ref5903_vld')
      expect(child.children).to.be.eql([])
    });
  });

  describe('each node', () => {
    it('supports nested children', () => {
      var nested = root.children[1]
      var labels = nested.children.map(node => node.label)
      expect(labels.length).to.equal(3)
      expect(labels).to.include('Sub-Series II A')
      expect(labels).to.include('Sub-Series II B')
      expect(labels).to.include('Sub-Series II C')
    });
  });
});
