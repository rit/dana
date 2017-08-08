import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import moxios from 'moxios'


// The default delay is too long.
moxios.delay = 0

Vue.use(ElementUI)
Vue.use(Vuex)


export function vmFor (component, options) {
  var Comp = Vue.extend(component)
  var vm = new Comp(options)
  return vm
}

export default {
  vmFor
}
