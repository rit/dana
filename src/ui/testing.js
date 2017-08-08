import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'


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
