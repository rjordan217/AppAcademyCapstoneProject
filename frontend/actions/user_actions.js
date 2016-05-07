var UserApiUtil = require('../util/user_api_util'),
    UserStore = require('../stores/user_store');

var UserActions = {

  fetchCurrentUser: function() {
    UserApiUtil.fetchCurrentUser();
  },

  login: function(userParams, callback) {
    UserApiUtil.login(userParams, callback);
  },

  logout: function(callback) {
    UserApiUtil.logout(callback);
  },

  create: function(userParams, callback) {
    UserApiUtil.create(userParams, callback);
  },

  destroy: function(callback) {
    UserApiUtil.destroy(callback);
  }

};

module.exports = UserActions;
