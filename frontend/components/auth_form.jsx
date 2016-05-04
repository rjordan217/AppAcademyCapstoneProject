// TODO: Convert to modal -
// isOpen:bool onRequestClose:function afterOpenModal:function closeTimeoutMS:number
// style:POJO

var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');
    CurrentUserStateMixin = require('../mixins/current_user_state'),
    UserActions = require('../actions/user_actions'),
    ImageUpload = require('./image_upload'),
    UserStore = require('../stores/user_store');

var AuthForm = React.createClass({
  mixins: [LinkedStateMixin, CurrentUserStateMixin],

  getInitialState: function() {
    return {
      inProgress: false,
      imageUrl: "/assets/default_profile_pic.jpg",
      username: "",
      password: ""
    };
  },

  _passUpImageUrl: function(url) {
    if (this.state.imageUrl !== url) {
      this.setState({imageUrl: url});
    }
  },

  _reenable: function() {
    this.setState({inProgress: false});
    if (this.state.currentUser.username) {
      this.props.closeModalFun();
    }
  },

  _submitLogin: function(e) {
    e.preventDefault();
    // TODO: Put in submission logic
    UserActions.login({
      username: this.state.username,
      password: this.state.password
    }, this._reenable);
    this.setState({inProgress: true});
  },

  _submitRegistration: function(e) {
    e.preventDefault();
    UserActions.create({
      username: this.state.username,
      password: this.state.password,
      profile_pic_url: this.state.imageUrl
    }, this._reenable);
    this.setState(
      {
        inProgress: true,
        username: "",
        password: ""
      }
    );
  },

  demoLogin: function() {
    var demoUsername = "pet_lover_demo";
    var idx = 0;
    var self = this;
    function typingCallback() {
      idx += 1;
      self.setState({ username: demoUsername.slice(0,idx) });
      if (idx === demoUsername.length) {
        self.setState({password: '123123'});
        self._submitLogin({preventDefault: function(){} });
      } else {
        setTimeout(typingCallback, 150);
      }
    }
    typingCallback();
  },

  render: function() {
    var ErrorGroup;
    if (this.state.authErrors.length !== 0) {
      ErrorGroup = (
        <ul className="auth-errors">
          {this.state.authErrors.map(function(err, idx) {
            return (<li key={idx}>{err}</li>);
          })}
        </ul>
      );
    }
    if (this.props.authType === "logout") {
      var logoutHeader = <h3>
        Logging out...
      </h3>;
      return (
        <div className="logging-out">
          <img className="loader-gif" src="/assets/loader.gif" />
          {ErrorGroup || logoutHeader}
        </div>
      );
    }
    var authHeader;
    var authButton;
    var innerText;
    switch (this.props.authType) {
      case "login":
        authHeader = <h2>Sign In</h2>;
        innerText = (this.state.inProgress ? "Logging in..." : "Login");
        authButton = (
          <div>
            <button disabled={this.state.inProgress}
              onClick={this._submitLogin}>
              {innerText}
            </button>
            <button disabled={this.state.inProgress}
              onClick={this.demoLogin}>Demo Login</button>
          </div>
        );
        break;
      case "register":
        authHeader = (
          <div>
            <h2>Sign Up</h2>
            <ImageUpload passUrlToParent={this._passUpImageUrl}
              defaultURL={this.state.imageUrl} formType="user" />
          </div>
        );
        innerText = (this.state.inProgress ? "Registering..." : "Register");
        authButton = (
          <button disabled={this.state.inProgress}
            onClick={this._submitRegistration}>
            {innerText}
          </button>
        );
        break;
    }
    return (
      <div className="auth-form">
        <button onClick={this.props.closeModalFun} className="close-modal">x</button>

        {authHeader}

        {ErrorGroup}

        <label>Username:
          <input id="username" type="text" valueLink={this.linkState("username")} />
        </label>
        <br />

        <label>Password:
          <input id="password" type="password" valueLink={this.linkState("password")}/>
        </label>
        <br />

        {authButton}
      </div>
    );
  }

});

module.exports = AuthForm;
