var Dispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/user_constants'),
    SellerConstants = require('../constants/seller_constants');

var ServerActions = {
  setCurrentUser: function(user) {
    Dispatcher.dispatch({
      actionType: UserConstants.RECEIVE_CURRENT_USER,
      user: user
    });
  },
  logoutCurrentUser: function() {
    Dispatcher.dispatch({
      actionType: UserConstants.LOGOUT_CURRENT_USER
    });
  },
  setSellers: function(sellers) {
    Dispatcher.dispatch({
      actionType: SellerConstants.RECEIVE_STORES,
      sellers: sellers
    });
  },
  removeSeller: function (seller) {
    Dispatcher.dispatch({
      actionType: SellerConstants.STORE_DESTROYED,
      seller: seller
    });
  }
};

module.exports = ServerActions;
