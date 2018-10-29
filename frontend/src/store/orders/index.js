import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

import orders from "@/mockData/Orders"

export default {
  namespaced: true,
  state: {
    ...orders
  },
  getters,
  mutations,
  actions
};
