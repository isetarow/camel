import * as types from "../mutationType";

export default {
  [types.addOrder](state, payload) {
    state.items = payload.items
    state.total = payload.total
  },
  [types.deleteOrder](state, payload) {
    state.items = payload
  },
  [types.updateOrder](state, payload) {
    const pos = state.items
      .map(item => {
        return item.id
      })
      .indexOf(payload.id)
    state.items[pos] = payload
  }
};
