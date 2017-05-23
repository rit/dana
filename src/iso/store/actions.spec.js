var moxios = require('moxios')
var sinon = require('sinon')
var swing = require('icemaker-swing')

var { updateCollectionMetaData, updateSeriesTree } = require('./actions')
var state = {}

describe('actions: updateCollectionMetaData', () => {
  var commit

  beforeEach(() => {
    moxios.install()
    commit = sinon.spy()
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

  describe('updateSeriesTree', () => {
    it('updates series nav tree', (done) => {
      var slug = '2011m30'
      updateSeriesTree({ commit, state }, { slug })

      moxios.wait(() => {
        const req = moxios.requests.mostRecent()
        const wire = req.respondWith({
          status: 200,
          response: loadJsonFixture('series-tree.json')
        })

        swing(wire, done, () => {
          expect(commit).to.have.been.called
          var [mutation, payload] = commit.getCall(0).args
          expect(mutation).to.equal('seriesTree')
          expect(payload.seriesTree.length).to.equal(1)
          expect(payload.seriesTree[0].label).to.contain('Szeemann')
          expect(payload.seriesTree[0].children.length).to.equal(10)
        })
      }, 0)
    })
  })

})
