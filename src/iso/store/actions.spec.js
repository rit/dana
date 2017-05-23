var moxios = require('moxios')
var sinon = require('sinon')
var swing = require('icemaker-swing')

var { updateCollectionMetaData } = require('./actions')
var state = {}

describe('actions: updateCollectionMetaData', () => {
  var commit

  beforeEach(() => {
    moxios.install()
    commit = sinon.mock()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('updates collectionHeading', (done) => {
    const slug = 'szeemann'
    updateCollectionMetaData({ commit, state }, { slug })

    moxios.wait(() => {
      const req = moxios.requests.mostRecent()
      const wire = req.respondWith({
        status: 200,
        response: loadJsonFixture('sample-collection.json')
      })
      swing(wire, done, () => {
        expect(commit).to.have.been.called
        var [ mutation, payload ] = commit.getCall(0).args
        expect(mutation).to.eql('collectionHeading')
        expect(payload.collectionHeading.label).to.contain('Szeemann')
        expect(payload.collectionHeading.physicalDesc).to.contain('Linear Feet')
      })
    }, 0)
  })
})
