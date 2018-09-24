import Vue from 'vue'
import Router from 'vue-router'
import StoreTop from '@/pages/StoreTop'
import StoreHeader from '@/components/StoreHeader'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faClock)

Vue.use(Router)

Vue.component('store-header', StoreHeader)
Vue.component('font-awesome-icon', FontAwesomeIcon)

export default new Router({
  routes: [
    {
      path: '/shops/:id',
      name: 'shops',
      component: StoreTop
    }
  ]
})
