var ServerActions = require('../actions/server_actions'),
    omit = require('object.omit');

var OrderApiUtil = {
  fetchOrderWithItemsById: function(orderId, successCallback) {
    $.ajax({
        method: 'GET',
        url: '/api/orders/' + orderId,
        success: function(order) {
          ServerActions.setCurrentOrder(omit(order, 'items'));
          ServerActions.setItems(order.items);
        }
      });
  },

  fetchCurrentOrder: function() {
    $.ajax({
        method: 'GET',
        url: '/api/cart/current',
        success: function(order) {
          ServerActions.setCurrentOrder(order);
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
