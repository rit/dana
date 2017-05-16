import store from './store'

describe('seriesTree updateSeriesTree', () => {
  it('updates asynchronously', () => {
    expect(store.state.seriesTree).to.eql([])

    store.dispatch('updateSeriesTree', { slug: 'szeemann' })
    // expect(store.state.seriesTree).to.eql([{}, {}])
  })
})
