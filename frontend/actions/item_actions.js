var ItemApiUtil = require('../util/item_api_util');

var ItemActions = {

  fetchItems: function(storeId) {
    ItemApiUtil.fetchItems(storeId);
  },

  fetchItemDetail: function(item_id) {
    ItemApiUtil.getItemById(item_id);
  },

  create: function(itemParams, successCallback) {
    ItemApiUtil.create(itemParams, successCallback);
  },

  destroy: function() {
    ItemApiUtil.destroy();
  }

};

module.exports = ItemActions;
