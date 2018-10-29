// うごかないよ
// サンプル　getterいらないかも
export default {
    getOrders: state => {
      return state.orders;
    },
    getOrder: state => id => {
      const order = state.orders.filter(order => {
        return order.id === Number(id);
      });
      return order[0];
    }
  };