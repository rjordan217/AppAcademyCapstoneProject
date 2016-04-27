var UserApiUtil = require('../util/api_utils').UserApiUtil,
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
