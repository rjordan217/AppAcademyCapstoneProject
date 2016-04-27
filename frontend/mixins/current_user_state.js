var UserStore = require('../stores/user_store'),
    UserApiUtil = require('../util/api_utils').UserApiUtil;

var CurrentUserStateMixin = {
  getInitialState: function() {
    UserApiUtil.fetchCurrentUser();
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
