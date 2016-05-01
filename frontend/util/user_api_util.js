var ServerActions = require('../actions/server_actions');

var UserApiUtil = { //TODO: Fix error handling
  fetchCurrentUser: function() {
    $.ajax({
      method: 'GET',
      url: '/api/user',
      success: function(user) {
        ServerActions.setCurrentUser(user);
      }
    });
  },

  login: function(userParams, callback) {
    $.ajax({
      method: 'POST',
      url: '/api/session',
      data: {user: userParams},
      success: function(user) {
        if (user.errors.length === 0) {
          ServerActions.setCurrentUser(user);
        } else {
          ServerActions.setUserErrors(user.errors);
        }
        setTimeout(callback,1000);
      }
    });
  },

  logout: function(callback) {
    $.ajax({
      method: 'DELETE',
      url: '/api/session',
      success: function(user) {
        if (user.errors.length === 0) {
          ServerActions.setCurrentUser(user);
        } else {
          ServerActions.setUserErrors(user.errors);
        }
        setTimeout(callback,1000);
      }
    });
  },

  create: function(userParams, callback) {
    $.ajax({
      method: 'POST',
      url: '/api/user',
      data: {user: userParams},
      success: function(user) {
        if (user.errors.length === 0) {
          ServerActions.setCurrentUser(user);
        } else {
          ServerActions.setUserErrors(user.errors);
        }
        setTimeout(callback,1000);
      }
    });
  },

  destroy: function() {
    $.ajax({
      method: 'DELETE',
      url: '/api/user',
      success: function(user) {
        if(user.errors.length === 0) {
          ServerActions.setCurrentUser(user);
        } else {
          ServerActions.setUserErrors(user.errors);
        }
      }
    });
  }
};

module.exports = UserApiUtil;
