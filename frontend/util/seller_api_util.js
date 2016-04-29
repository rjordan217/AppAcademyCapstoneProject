var ServerActions = require('../actions/server_actions');

var SellerApiUtil = {
  fetchSellers: function() {
    $.ajax({
        method: 'GET',
        url: '/api/stores',
        success: function(stores) {
          ServerActions.setSellers(stores);
        }
      });
  },

  getSellerById: function(sellerId) {
    $.ajax({
        method: 'GET',
        url: '/api/seller/' + sellerId,
        success: function(store) {
          ServerActions.addSeller(store);
        }
      });
  }
};

module.exports = SellerApiUtil;
