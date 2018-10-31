import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

import itemDetail from "@/mockData/ItemDetail"

export default {
  namespaced: true,
  state: {
    ...itemDetail
  },
  getters,
  mutations,
  actions
};
