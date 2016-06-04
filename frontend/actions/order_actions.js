var OrderApiUtil = require('../util/order_api_util'),
    ServerActions = require('../actions/server_actions');

var OrderActions = {

  newOrder: function(callback) {
    OrderApiUtil.create(callback);
  },

  getOrderWithItemsById: function(orderId, callback) {
    OrderApiUtil.fetchOrderWithItemsById(orderId, callback);
  },

  fetchCurrentOrder: function() {
    OrderApiUtil.fetchCurrentOrder();
  },

  placeOrder: function(orderId, callback) {
    OrderApiUtil.update(orderId, true, callback);
  },

  removeOrder: function(orderId, callback) {
    OrderApiUtil.destroy(orderId, callback);
  },

  resetOrders: function() {
    ServerActions.resetOrders();
  }

};

module.exports = OrderActions;
