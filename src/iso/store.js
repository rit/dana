import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import mapper from 'iso/mapper'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    collectionMetaData: {},
    collectionHeading: {},
    seriesTree: [],
    seriesTreeSlug: null

  },

  mutations: {
    updateCollectionMetaData (state, payload) {
      state.collectionMetaData = payload.collectionMetaData
    },

    updateCollectionHeading (state, { collectionHeading }) {
      state.collectionHeading = collectionHeading
    },

    updateSeriesTree (state, { seriesTree }) {
      state.seriesTree = seriesTree
    },

    seriesTreeSlug (state, { slug }) {
      state.seriesTreeSlug = slug
    }
  },

  actions: {
    updateSeriesTree ({ commit, state }, { slug }) {
      if (slug !== state.seriesTreeSlug) {
        commit('seriesTreeSlug', { slug })
        var url = `/static/${slug}.json`
        axios.get(url)
          .then((resp) => {
            var tree = [mapper.seriesTree(resp.data)]
            commit('updateSeriesTree', { seriesTree: tree })
          })
          .catch(function (err) {
            console.log(err)
            commit('updateSeriesTree', { seriesTree: [] })
          })
      }
    },

    updateCollectionMetaData ({ commit, state }, { slug }) {
      // get the meta data from the server
      // parse and commit the collection heading and series tree
      var url = `/static/${slug}.json`
      axios.get(url)
        .then((resp) => {
          var seriesTree = [mapper.seriesTree(resp.data)]
          var collectionHeading = mapper.collectionHeading(resp.data)
          commit('updateSeriesTree', { seriesTree })
          commit('updateCollectionHeading', { collectionHeading })
        })
        .catch(function (err) {
          // TODO How do we update the UI?
          console.log(err)
        })
    }
  }
})

export default store
