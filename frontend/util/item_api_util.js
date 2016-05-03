var ServerActions = require('../actions/server_actions');

var ItemApiUtil = {
  fetchItems: function(storeId) {
    $.ajax({
        method: 'GET',
        url: '/api/items',
        data: {store_id: storeId},
        success: function(items) {
          ServerActions.setItems(items);
        }
      });
  },

  getItemById: function(itemId) {
    $.ajax({
        method: 'GET',
        url: '/api/items/' + itemId,
        success: function(item) {
          ServerActions.addItem(item);
        }
      });
  },

  create: function(itemParams, successCallback) {
    $.ajax({
        method: 'POST',
        url: '/api/items',
        data: {item: itemParams},
        success: function(item) {
          successCallback();
          ServerActions.addItem(item);
        }
      });
  },

  destroy: function() {

  },

  primarySearch: function(searchParams) {
    $.ajax({
        method: 'GET',
        url: '/api/search/items',
        data: {search_params: searchParams},
        success: function(data) {
          ServerActions.setItems(data);
        }
      });
  }
};

module.exports = ItemApiUtil;
