var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/dispatcher'),
    OrderConstants = require('../constants/order_constants'),
    ItemRequestConstants = require('../constants/item_request_constants'),
    _ = require('underscore'),
    OrderStore = new Store(Dispatcher);

var _orders = {},
    _currentOrder = { id: null, itemRequests: [] },
    _errors = [];

function addOrder(order) {
  _orders[order.id] = order;
}

function setCurrentOrder(order) {
  _currentOrder = order;
  addOrder(_currentOrder);
}

function setErrors(errs) {
  _errors = errs;
}

function resetErrors() {
  _errors = [];
}

function resetCurrentOrder() {
  _currentOrder = { id: null, itemRequests: [] };
}

function resetOrders() {
  _orders = {};
}

function removeOrder(order) {
  _orders = _.omit(_orders, order.id);
  if (order.id === _currentOrder.id) {
    resetCurrentOrder();
  }
}

function addItemRequest(itemRequest) {
  if (_currentOrder.itemRequests) {
    _currentOrder.itemRequests.push(itemRequest);
  }
}

function removeItemRequest(itemRequest) {
  var orderIdx = itemRequest.order_id;
  var irIdx = -1;
  _orders[orderIdx].itemRequests.forEach(function(iReq, idx) {
    if (iReq.id === itemRequest.id) {
      irIdx = idx;
    }
  });
  if (irIdx >= 0) {
    _orders[orderIdx].itemRequests.splice(irIdx, 1);
  }
}

OrderStore.allErrors = function() {
  return _errors.slice();
};

OrderStore.getCurrentOrder = function() {
  return Object.assign({}, _currentOrder);
};

OrderStore.allOrders = function() {
  var orderArray = [];
  Object.keys(_orders).forEach(function(key) {
    orderArray.push(_orders[key]);
  });
  return orderArray;
};

OrderStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case OrderConstants.RECEIVE_ERRORS:
      resetErrors(payload.errors);
      OrderStore.__emitChange();
      break;
    case OrderConstants.ORDER_ADDED:
      addOrder(payload.order);
      OrderStore.__emitChange();
      break;
    case OrderConstants.ORDER_UPDATED:
      addOrder(payload.order);
      OrderStore.__emitChange();
      break;
    case OrderConstants.ORDER_REMOVED:
      removeOrder(payload.order);
      OrderStore.__emitChange();
      break;
    case OrderConstants.CURRENT_ORDER_SET:
      setCurrentOrder(payload.order);
      OrderStore.__emitChange();
      break;
    case OrderConstants.ORDERS_RESET:
      resetCurrentOrder();
      resetOrders();
      OrderStore.__emitChange();
      break;
    case ItemRequestConstants.ITEM_REQUEST_ADDED:
      addItemRequest(payload.itemRequest);
      OrderStore.__emitChange();
      break;
    case ItemRequestConstants.ITEM_REQUEST_REMOVED:
      removeItemRequest(payload.itemRequest);
      OrderStore.__emitChange();
      break;
  }
};

module.exports = OrderStore;
