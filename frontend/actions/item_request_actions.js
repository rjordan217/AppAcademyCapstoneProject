var ItemRequestApiUtil = require('../util/item_request_api_util');

var ItemRequestActions = {

  addItemRequest: function(orderId, itemId, quantity, callback) {
    var itemRequestParams = {
      order_id: orderId,
      item_id: itemId,
      quantity: quantity
    };
    ItemRequestApiUtil.create(itemRequestParams, callback);
  },

  removeItemRequest: function(itemRequestId, callback) {
    ItemRequestApiUtil.destroy(itemRequestId, callback);
  }

};

module.exports = ItemRequestActions;
