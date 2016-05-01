var SellerApiUtil = require('../util/seller_api_util'),
    ItemApiUtil = require('../util/item_api_util');

var SearchActions = {
  primarySearch: function(searchParams) {
    SellerApiUtil.primarySearch(searchParams);
    ItemApiUtil.primarySearch(searchParams);
  }
};

module.exports = SearchActions;
