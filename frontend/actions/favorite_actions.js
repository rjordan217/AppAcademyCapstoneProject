var FavoriteApiUtil = require('../util/favorite_api_util');

var FavoriteActions = {

  addFavorite: function(userId, favoritableId, favoritableType, callback) {
    var favoriteParams = {
      user_id: userId,
      favoritable_id: favoritableId,
      favoritable_type: favoritableType
    };
    FavoriteApiUtil.create(favoriteParams, callback);
  },

  removeFavorite: function(favoriteId, callback) {
    FavoriteApiUtil.destroy(favoriteId, callback);
  }

};

module.exports = FavoriteActions;
