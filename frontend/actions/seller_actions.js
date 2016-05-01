var SellerApiUtil = require('../util/seller_api_util'),
    SellerStore = require('../stores/seller_store');

var SellerActions = {

  fetchStores: function() {
    SellerApiUtil.fetchSellers();
  },

  fetchStoreDetail: function(store_id) {
    SellerApiUtil.getSellerById(store_id);
  },

  create: function(storeParams) {
    SellerApiUtil.create(storeParams);
  },

  destroy: function() {
    SellerApiUtil.destroy();
  }

};

module.exports = SellerActions;
