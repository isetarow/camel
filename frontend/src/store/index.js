import Vue from 'vue'
import Vuex from 'vuex'

import shop from './shop'
import orders from './orders'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    shop,
    orders
  }
});

export default store;
