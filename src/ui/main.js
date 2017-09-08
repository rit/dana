// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import vmodal from 'vue-js-modal'

import 'vue-awesome/icons/plus'
import 'vue-awesome/icons/minus'
import 'vue-awesome/icons/chevron-left'
import 'vue-awesome/icons/chevron-right'
import 'vue-awesome/icons/times'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)

import App from './App'
import routes from './routes'
import initStore from 'iso/store'

Vue.use(Router)
Vue.use(ElementUI)
Vue.use(vmodal)
Vue.config.productionTip = false

var store = initStore(Vue)
var router = new Router({ routes })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
