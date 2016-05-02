var ServerActions = require('../actions/server_actions');

var FavoriteApiUtil = {

  create: function(favoriteParams, callback) {
    $.ajax({
        method: 'POST',
        url: '/api/favorites',
        data: {favorite: favoriteParams},
        success: function(favorite) {
          ServerActions.addFavorite(favorite);
          callback();
        }
      });
  },

  destroy: function(favoriteId, callback) {
    $.ajax({
        method: 'DELETE',
        url: '/api/favorites/' + favoriteId,
        success: function(favorite) {
          ServerActions.removeFavorite(favorite);
          callback();
        }
      });
  }

};

module.exports = FavoriteApiUtil;
