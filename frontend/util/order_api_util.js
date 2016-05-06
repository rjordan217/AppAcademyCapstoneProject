var ServerActions = require('../actions/server_actions');

var OrderApiUtil = {
  fetchOrderById: function(orderId, successCallback) {
    $.ajax({
        method: 'GET',
        url: '/api/orders/' + orderId,
        success: function(order) {
          ServerActions.setCurrentOrder(order);
          successCallback();
        }
      });
  },

  create: function(successCallback) {
    $.ajax({
      method: 'POST',
      url: '/api/orders',
      data: {order: {placed: false}},
      success: function(order) {
        ServerActions.setCurrentOrder(order);
        successCallback(order);
      }
    });
  },

  update: function(orderId, placed, successCallback) {
    $.ajax({
      method: 'PATCH',
      url: '/api/orders/' + orderId,
      data: {order: {placed: placed}},
      success: function(order) {
        ServerActions.updateOrder(order);
        successCallback();
      }
    });
  },

  destroy: function(orderId, successCallback) {
    $.ajax({
      method: 'DELETE',
      url: '/api/orders/' + orderId,
      success: function(order) {
        ServerActions.removeOrder(order);
        successCallback();
      }
    });
  }

};

module.exports = OrderApiUtil;
