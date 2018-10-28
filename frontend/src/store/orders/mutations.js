import * as types from "../mutationType";

export default {
  [types.addOrder](state, payload) {
    state.orders.push(payload);
  },
  [types.deleteOrder](state, payload) {
    state.orders = payload;
  },
  [types.updateOrder](state, payload) {
    const pos = state.orders
      .map(order => {
        return order.id;
      })
      .indexOf(payload.id);
    state.orders[pos] = payload;
  }
};
