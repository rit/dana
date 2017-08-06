var Vue = require('vue/dist/vue.common')
var initStore = require('iso/store')
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
    store.dispatch('fetchCollection', { slug })

    moxios.wait(() => {
      const req = moxios.requests.mostRecent()
      const wire = req.respondWith({
        status: 200,
        response: loadJsonFixture('sample-collection.json')
      })
      swing(wire, done, () => {
        expect(store.getters.collectionBySlug(slug).label).to.equal('Harald Szeemann papers')
      })
    })
  })
})
