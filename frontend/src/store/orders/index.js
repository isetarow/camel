import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

import order from "@/mockData/Order"

export default {
  namespaced: true,
  state: {
    orders: [
      ...order
    ],
  },
  getters,
  mutations,
  actions
};
