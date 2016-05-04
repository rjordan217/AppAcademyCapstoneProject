var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/dispatcher'),
    ItemConstants = require('../constants/item_constants'),
    ItemStore = new Store(Dispatcher);

var _items = {};


function addItem(item) {
  _items[item.id] = item
}

function resetItems(items) {
  _items = {};
  items.forEach(addItem);
}

function removeItem(item) {
  _items = _.omit(_items, item.id);
}

function addFavorite(like) {
  _items[like.favoritable_id]['favorites'].push(like);
}

function removeFavorite(like) {
  var favs = _items[like.favoritable_id]['favorites'];
  var idxToDelete = -1;
  favs.forEach(function(fav, idx) {
    if(fav.favoritable_id === like.favoritable_id) {
      idxToDelete = idx;
    }
  });
  if (idxToDelete >= 0) {
    favs.splice(idxToDelete, 1);
  }
}

ItemStore.all = function() {
  var itemArray = [];
  Object.keys(_items).forEach(function(itemKey) {
    itemArray.push(_items[itemKey]);
  });
  return itemArray;
};

ItemStore.getItemById = function(id) {
  return _items[id];
};

ItemStore.__onDispatch = function(payload) {
  switch (payload.actionType) {

    case ItemConstants.RECEIVE_ITEMS:
      resetItems(payload.items);
      ItemStore.__emitChange();
      break;
    case ItemConstants.ITEM_DETAILS_FETCHED:
      addItem(payload.item);
      ItemStore.__emitChange();
      break;
    case ItemConstants.ITEM_DESTROYED:
      removeItem(payload.item);
      ItemStore.__emitChange();
      break;
    case ItemConstants.FAVORITE_ADDED:
      addFavorite(payload.favorite);
      ItemStore.__emitChange();
      break;
    case ItemConstants.FAVORITE_REMOVED:
      removeFavorite(payload.favorite);
      ItemStore.__emitChange();
      break;
  }
};

module.exports = ItemStore;
