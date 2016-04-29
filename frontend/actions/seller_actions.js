var SellerApiUtil = require('../util/seller_api_util'),
    SellerStore = require('../stores/sellers_store');

var SellerActions = {

  fetchStores: function() {
    SellerApiUtil.fetchSellers();
  },

  create: function(storeParams) {
    SellerApiUtil.create(storeParams);
  },

  destroy: function() {
    SellerApiUtil.destroy();
  }

};

module.exports = SellerActions;
