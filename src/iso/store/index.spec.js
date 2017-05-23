var Vue = require('vue/dist/vue.common')
var initStore = require('iso/store')
var moxios = require('moxios')
var swing = require('icemaker-swing')

var store = initStore(Vue)

describe('initStore', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('handles actions', (done) => {
    const slug = 'szeemann'
    store.dispatch('updateCollectionMetaData', { slug })

    moxios.wait(() => {
      const req = moxios.requests.mostRecent()
      const wire = req.respondWith({
        status: 200,
        response: loadJsonFixture('sample-collection.json')
      })
      swing(wire, done, () => {
        expect(store.state.collectionHeading.label).to.contain('Szeemann papers')
      })
    })
  })
})
