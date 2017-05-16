var navTree = require('iso/transformer').navTree

describe('navTree', () => {
  var data
  var root

  before(() => {
    data = fixture()
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

function fixture () {
  return {
    '@id': 'http://data.getty.edu/iiif/collection/2011m30/collection.json',
    'label': 'Harald Szeemann papers',
    'collections': [
      {
        '@id': 'http://data.getty.edu/iiif/collection/ref5903_vld/collection.json',
        'label': 'Project files, Series I.'
      },
      {
        '@id': 'http://data.getty.edu/iiif/collection/ref237693_e02/collection.json',
        'label': 'Artist files Series II.',
        'collections': [
          { '@id': 'id for Sub-Series II',
            'label': 'Sub-Series II A',
            'collections': []
          },
          {
            '@id': 'http://data.getty.edu/iiif/collection/ref237693_e02/collection.json',
            'label': 'Sub-Series II B',
            'collections': []
          },
          {
            '@id': 'http://data.getty.edu/iiif/collection/ref234485_6io/collection.json',
            'label': 'Sub-Series II C',
            'collections': []
          }
        ]
      },
      {
        '@id': 'http://data.getty.edu/iiif/collection/ref234485_6io/collection.json',
        'label': 'Curator and museum professional files, Series III.'
      }
    ]
  }
}
