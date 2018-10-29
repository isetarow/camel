import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

import shop from "@/mockData/Shop"

export default {
  namespaced: true,
  state: {
    ...shop
  },
  getters,
  mutations,
  actions
};
