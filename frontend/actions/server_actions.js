var Dispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/user_constants');

var ServerActions = {
  setCurrentUser: function(user) {
    Dispatcher.dispatch({
      actionType: UserConstants.RECEIVE_CURRENT_USER,
      user: user
    });
  },
  logoutCurrentUser: function() {
    Dispatcher.dispatch({
      actionType: UserConstants.LOGOUT_CURRENT_USER
    });
  }
};

module.exports = ServerActions;
