import Vue from 'vue'
import Router from 'vue-router'
import StoreTop from '@/pages/StoreTop'
import StoreHeader from '@/components/StoreHeader'

Vue.use(Router)

Vue.component('store-header', StoreHeader)

export default new Router({
  routes: [
    {
      path: '/shops/:id',
      name: 'shops',
      component: StoreTop
    }
  ]
})
