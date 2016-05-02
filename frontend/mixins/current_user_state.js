var UserStore = require('../stores/user_store'),
    UserApiUtil = require('../util/user_api_util');

var CurrentUserStateMixin = {
  getInitialState: function() {
    if(!UserStore.getCurrentUser().username) {
      UserApiUtil.fetchCurrentUser();
    }
    return {
      currentUser: UserStore.getCurrentUser(),
      authErrors: UserStore.allErrors()
    };
  },
  componentDidMount: function() {
    this.listenerToken = UserStore.addListener(this.updateUser);
  },
  updateUser: function() {
    this.setState({
      currentUser: UserStore.getCurrentUser(),
      authErrors: UserStore.allErrors()
    });
  },
  componentWillUnmount: function() {
    this.listenerToken.remove();
  }
};

module.exports = CurrentUserStateMixin;
