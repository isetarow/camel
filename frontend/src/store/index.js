import Vue from 'vue'
import Vuex from 'vuex'

import shop from './shop'
import orders from './orders'
import itemDetail from './itemDetail'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    shop,
    orders,
    itemDetail,
  }
});

export default store;
