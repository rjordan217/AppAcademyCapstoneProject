var ServerActions = require('../actions/server_actions');

var ItemRequestApiUtil = {

  create: function(itemRequestParams, successCallback) {
    $.ajax({
        method: 'POST',
        url: '/api/item_requests',
        data: {item_request: itemRequestParams},
        success: function(itemRequest) {
          ServerActions.addItemRequest(itemRequest);
        }
      });
  },

  destroy: function(itemRequestId, successCallback) {
    $.ajax({
        method: 'DELETE',
        url: '/api/item_requests/' + itemRequestId,
        success: function(itemRequest) {
          ServerActions.removeItemRequest(itemRequest);
          successCallback();
        }
      });
  }

};

module.exports = ItemRequestApiUtil;
