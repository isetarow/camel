// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import windowStatePlugin from './plugins/windowStatePlugin'
import VueLodash from 'vue-lodash'

Vue.config.productionTip = false
Vue.use(windowStatePlugin)
Vue.use(VueLodash)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
