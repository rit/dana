var Vue = require('vue/dist/vue.common')
var initStore = require('iso/store')
var moxios = require('moxios')
var swing = require('icemaker-swing')
var loadJsonFixture = require('../../test/helper/load-json')

var store = initStore(Vue)

describe('seriesTree updateSeriesTree', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('updates asynchronously', (done) => {
    const slug = 'szeemann'
    store.dispatch('updateCollectionMetaData', { slug })

    moxios.wait(() => {
      const req = moxios.requests.mostRecent()
      const wire = req.respondWith({
        status: 200,
        response: loadJsonFixture('szeemann-collection.json')
      })
      swing(wire, done, () => {
        expect(store.getters.collectionHeading(slug).label).to.contain('Szeemann papers')
        expect(store.getters.seriesTree(slug)[0].label).to.contain('Szeemann')
      })
    })
  })
})
