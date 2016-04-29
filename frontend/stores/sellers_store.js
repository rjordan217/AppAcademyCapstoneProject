var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/dispatcher'),
    SellerConstants = require('../constants/seller_constants'),
    SellerStore = new Store(Dispatcher);

var _sellers = {};
// var _authErrors = [];

// function resetErrors(errs) {
//   _authErrors = errs;
// }

function addSeller(seller) {
  _sellers[seller.id] = seller
}

function resetSellers(sellers) {
  _sellers = {};
  sellers.forEach(addSeller);
}

function removeSeller(seller) {
  _sellers = _.omit(_sellers, seller.id);
}

// SellerStore.allErrors = function() {
//   return _authErrors.slice();
// };

SellerStore.all = function() {
  var storeArray = [];
  Object.keys(_sellers).forEach(function(storeKey) {
    storeArray.push(_sellers[storeKey]);
  });
  return storeArray;
};

SellerStore.getSellerById = function(id) {
  return _sellers[id];
};

SellerStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    // case SellerConstants.RECEIVE_ERRORS:
    //   resetErrors(payload.errors);
    //   SellerStore.__emitChange();
    //   break;
    case SellerConstants.RECEIVE_STORES:
      resetSellers(payload.sellers);
      SellerStore.__emitChange();
      break;
    case SellerConstants.STORE_DESTROYED:
      removeSeller(payload.seller);
      SellerStore.__emitChange();
      break;
  }
};

module.exports = SellerStore;
