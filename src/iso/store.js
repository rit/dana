import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { navTree } from 'iso/transformer'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    seriesTree: [],
    seriesTreeSlug: null
  },

  mutations: {
    updateSeriesTree (state, payload) {
      state.seriesTree = payload.seriesTree
    },

    seriesTreeSlug (state, payload) {
      state.seriesTreeSlug = payload.slug
    }
  },

  actions: {
    updateSeriesTree ({ commit, state }, { slug }) {
      if (slug !== state.seriesTreeSlug) {
        commit('seriesTreeSlug', { slug })
        var url = `/static/${slug}.json`
        axios.get(url)
          .then((resp) => {
            var tree = [navTree(resp.data)]
            commit('updateSeriesTree', { seriesTree: tree })
          })
          .catch(function (err) {
            console.log(err)
            commit('updateSeriesTree', { seriesTree: [] })
          })
      }
    }
  }
})

export default store
