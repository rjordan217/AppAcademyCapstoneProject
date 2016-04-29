var UserApiUtil = require('../util/user_api_util'),
    UserStore = require('../stores/user_store');

var UserActions = {

  fetchCurrentUser: function() {
    UserApiUtil.fetchCurrentUser();
  },

  login: function(userParams) {
    UserApiUtil.login(userParams);
  },

  logout: function() {
    UserApiUtil.logout();
  },

  create: function(userParams) {
    UserApiUtil.create(userParams);
  },

  destroy: function() {
    UserApiUtil.destroy();
  }

};

module.exports = UserActions;
