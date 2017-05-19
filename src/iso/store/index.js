var Vuex = require('vuex')
var { state, mutations } = require('iso/store/mutations')
var actions = require('iso/store/actions')
var getters = require('iso/store/getters')

function initStore (vue) {
  // So we can run vuex on Node
  vue.use(Vuex)

  return new Vuex.Store({
    state,
    mutations,
    actions,
    getters
  })
}

module.exports = initStore
