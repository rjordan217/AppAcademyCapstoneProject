var React = require('react'),
    UserActions = require('../actions/user_actions'),
    Logo = require('./logo'),
    AuthForm = require('./auth_form'),
    SearchBar = require('./search_bar'),
    ShoppingCartIcon = require('./shopping_cart_icon'),
    ProfThumbnail = require('./prof_thumbnail'),
    OrderActions = require('../actions/order_actions'),
    Modal = require('react-modal'),
    modalStyle = require('../styles/auth_modal'),
    CurrentUserStateMixin = require('../mixins/current_user_state');

var NavBar = React.createClass({
  mixins: [CurrentUserStateMixin],
  getInitialState: function() {
    return {
      modalOpen: false,
      authType: ""
    };
  },
  _newSession: function() {
    //TODO: start modal login form
    this.setState({
      modalOpen: true,
      authType: "login"
    });
  },
  _newUser: function() {
    //TODO: start modal register form
    this.setState({
      modalOpen: true,
      authType: "register"
    });
  },
  _logout: function() {
    UserActions.logout(this.closeModal);
    OrderActions.resetOrders();
    this.setState({
      modalOpen: true,
      authType: "logout"
    });
  },
  closeModal: function() {
    this.setState({
      modalOpen: false
    });
  },
  render: function() {
    Modal.setAppElement(document.body);
    var authButtons;
    if (!this.state.currentUser.username) {
      authButtons = (
        <div className="nav-auth"
          data-intro="Log in as a demo user, or register as a new user.
          After login, you can build a shopping cart, favorite items/stores, and
          even create your own stores/items!"
          data-step="3">
          <div onClick={this._newSession}>Login</div>
          <div onClick={this._newUser}>Register</div>
        </div>
      );
    } else {
      authButtons = (
        <div className="nav-auth">
          <ShoppingCartIcon />
          <ProfThumbnail userProf={this.state.currentUser} />
          <div onClick={this._logout}>Logout</div>
        </div>
      );
    }

    return (
      <header className="nav-bar">
        <Logo />
        <SearchBar />
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={modalStyle}>
          <AuthForm closeModalFun={this.closeModal} authType={this.state.authType} />
        </Modal>
        {authButtons}
      </header>
    );
  }

});

module.exports = NavBar;
