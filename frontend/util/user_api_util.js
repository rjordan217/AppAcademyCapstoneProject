var ServerActions = require('../actions/server_actions');

var UserApiUtil = { //TODO: Fix error handling
  fetchCurrentUser: function() {
    $.ajax({
      method: 'GET',
      url: '/api/user',
      success: function(user) {
        ServerActions.setCurrentUser(user);
      },
      error: function(data, status, e) {
        console.log(status);
      }
    });
  },

  login: function(userParams) {
    $.ajax({
      method: 'POST',
      url: '/api/session',
      data: {user: userParams},
      success: function(user) {
        ServerActions.setCurrentUser(user);
      },
      error: function(data, status, e) {
        console.log(status);
      }
    });
  },

  logout: function() {
    $.ajax({
      method: 'DELETE',
      url: '/api/session',
      success: function(user) {
        ServerActions.setCurrentUser(user);
      },
      error: function(data, status, e) {
        console.log(status);
      }
    });
  },

  create: function(userParams) {
    $.ajax({
      method: 'POST',
      url: '/api/user',
      data: {user: userParams},
      success: function(user) {
        ServerActions.setCurrentUser(user);
      },
      error: function(data, status, e) {
        console.log(status);
      }
    });
  },

  destroy: function() {
    $.ajax({
      method: 'DELETE',
      url: '/api/user',
      success: function(user) {
        ServerActions.setCurrentUser(user);
      },
      error: function(data, status, e) {
        console.log(status);
      }
    });
  }
};

module.exports = UserApiUtil;
