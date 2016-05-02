var Dispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/user_constants'),
    ItemConstants = require('../constants/item_constants'),
    SellerConstants = require('../constants/seller_constants');

var ServerActions = {
  setUserErrors: function(errors) {
    Dispatcher.dispatch({
      actionType: UserConstants.RECEIVE_ERRORS,
      errors: errors
    });
  },

  setCurrentUser: function(user) {
    Dispatcher.dispatch({
      actionType: UserConstants.RECEIVE_CURRENT_USER,
      user: user
    });
  },

  setSellers: function(sellers) {
    Dispatcher.dispatch({
      actionType: SellerConstants.RECEIVE_STORES,
      sellers: sellers
    });
  },
  addSeller: function(seller) {
    Dispatcher.dispatch({
      actionType: SellerConstants.STORE_DETAILS_FETCHED,
      seller: seller
    })
  },
  removeSeller: function (seller) {
    Dispatcher.dispatch({
      actionType: SellerConstants.STORE_DESTROYED,
      seller: seller
    });
  },
  setItems: function(items) {
    Dispatcher.dispatch({
      actionType: ItemConstants.RECEIVE_ITEMS,
      items: items
    });
  },
  addItem: function(item) {
    Dispatcher.dispatch({
      actionType: ItemConstants.ITEM_DETAILS_FETCHED,
      item: item
    })
  },
  removeItem: function (item) {
    Dispatcher.dispatch({
      actionType: ItemConstants.ITEM_DESTROYED,
      item: item
    });
  },
  addFavorite: function(favorite) {
    var payload = {favorite: favorite};
    switch (favorite.favoritable_type) {
      case "Store":
        payload['actionType'] = SellerConstants.FAVORITE_ADDED;
        break;
      case "Item":
        payload['actionType'] = ItemConstants.FAVORITE_ADDED;
        break;
    }
    Dispatcher.dispatch(payload);
  },
  removeFavorite: function(favorite) {
    var payload = {favorite: favorite};
    switch (favorite.favoritable_type) {
      case "Store":
        payload['actionType'] = SellerConstants.FAVORITE_REMOVED;
        break;
      case "Item":
        payload['actionType'] = ItemConstants.FAVORITE_REMOVED;
        break;
    }
    Dispatcher.dispatch(payload);
  }
};

module.exports = ServerActions;
