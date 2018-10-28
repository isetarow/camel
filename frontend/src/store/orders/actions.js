import * as types from "../mutationType";
import router from "../../router";

// うごかないよ

export default {
  addOrder: ({ state, commit }, value) => {
    commit(types.addOrder, value);
    router.push("/shops");
  },

  deleteOrder: ({ state, commit }, id) => {
    const orders = state.orders.filter(order => {
      return order.id !== id;
    });
    commit(types.deleteOrder, orders);
  },

  updateOrder: ({ state, commit }, value) => {
    commit(types.updateOrder, value);
    router.push("/shops");
  }
};