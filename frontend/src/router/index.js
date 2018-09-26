import Vue from 'vue'
import Router from 'vue-router'
import StoreTop from '@/pages/StoreTop'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faClock)

Vue.use(Router)

Vue.component('font-awesome-icon', FontAwesomeIcon)

export default new Router({
  routes: [
    {
      path: '/stores/:id',
      name: 'storeTop',
      component: StoreTop
    }
  ]
})
