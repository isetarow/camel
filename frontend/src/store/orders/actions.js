import * as types from "../mutationType";
import router from "../../router";

import ArrayUtil from "@/utils/ArrayUtil"
import _ from "lodash"

export default {
  addOrder: ({ state, commit }, value) => {
    const items = ArrayUtil.AddOrUpdate(value, state.items, 'id', (i1, i2) => {
      i1.count += i2.count
      i1.subTotal = i1.count * i1.price
      return i1
    })
    const total = _.sumBy(items, i => i.subTotal)
    commit(types.addOrder, {items, total})
  },

  deleteOrder: ({ state, commit }, id) => {
    //TODO
    const orders = state.orders.filter(order => {
      return order.id !== id
    });
    commit(types.deleteOrder, orders)
  },

  updateOrder: ({ state, commit }, value) => {
    //TODO
    commit(types.updateOrder, value)
    router.push("/shops")
  }
};