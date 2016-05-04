var SellerApiUtil = require('../util/seller_api_util'),
    SellerStore = require('../stores/seller_store'),
    ServerActions = require('./server_actions');

var SellerActions = {

  fetchStores: function() {
    SellerApiUtil.fetchSellers();
  },

  fetchStoreDetail: function(store_id) {
    SellerApiUtil.getSellerById(store_id);
  },

  create: function(storeParams, successCallback) {
    SellerApiUtil.create(storeParams, successCallback);
  },

  destroy: function() {
    SellerApiUtil.destroy();
  },

  resetSellers: function() {
    ServerActions.setSellers([]);
  }

};

module.exports = SellerActions;
