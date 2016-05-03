var SellerApiUtil = require('../util/seller_api_util'),
    SellerStore = require('../stores/seller_store');

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
  }

};

module.exports = SellerActions;
