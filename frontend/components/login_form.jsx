var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');
    CurrentUserStateMixin = require('../mixins/current_user_state'),
    UserActions = require('../actions/user_actions'),
    UserStore = require('../stores/user_store');

var LoginForm = React.createClass({
  mixins: [LinkedStateMixin, CurrentUserStateMixin],
  getInitialState: function() {
    return {
      inProgress: false,
      username: "",
      password: ""
    };
  },
  componentDidMount: function() {
    this.disablerToken = UserStore.addListener(this._reenable);
  },
  _reenable: function() {
    this.setState({inProgress: false});
  },
  _submitLogin: function(e) {
    e.preventDefault();
    // TODO: Put in submission logic
    UserActions.login({
      username: this.state.username,
      password: this.state.password
    });
    this.setState({inProgress: true});
  },
  _submitLogout: function(e) {
    e.preventDefault();
    UserActions.logout();
    this.setState(
      {
        inProgress: true,
        username: "",
        password: ""
      }
    );
  },
  componentWillUnmount: function() {
    this.disablerToken.remove();
  },
  render: function() {
    var logForm;
    if (this.state.currentUser.username) {
      var logoutButton;
      if (this.state.inProgress) {
        logoutButton = <button id="logout"
          className="log-form"
          disabled={true}>Logging out...</button>;
      } else {
        logoutButton = <button id="logout"
          className="log-form"
          onClick={this._submitLogout}>Logout</button>;
      }
      logForm = (
        <div className="login-form">
          {logoutButton}
        </div>
      );
    } else {
      var loginButton;
      if (this.state.inProgress) {
        loginButton = <button id="login" className="log-form"
          disabled={true}>Logging in...</button>;
      } else {
        loginButton = <button id="login" className="log-form"
          onClick={this._submitLogin} disabled={false}>Log In</button>;
      }
      logForm = (
        <div className="login-form">
          <label>Username:
            <input id="username" type="text" valueLink={this.linkState("username")} />
          </label>
          <br />

          <label>Password:
            <input id="password" type="password" valueLink={this.linkState("password")}/>
          </label>
          <br />

          {loginButton}
        </div>
      );
    }

    return logForm;
  }

});

module.exports = LoginForm;
