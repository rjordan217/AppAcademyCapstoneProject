var React = require('react'),
    OrderActions = require('../actions/order_actions'),
    HashHistory = require('react-router').hashHistory,
    Dropdown = require('./dropdown'),
    CurrentUserStateMixin = require('../mixins/current_user_state'),
    OrderStore = require('../stores/order_store');

var ShoppingCartIcon = React.createClass({
  mixins: [ CurrentUserStateMixin ],

  getInitialState: function() {
    return {
      cart: OrderStore.getCurrentOrder(),
      hovered: false
    };
  },

  componentDidMount: function() {
    this.listenerToken = OrderStore.addListener(this.updateCart);
    OrderActions.fetchCurrentOrder();
  },

  updateCart: function() {
    this.setState({cart: OrderStore.getCurrentOrder()});
  },

  componentWillUnmount: function() {
    this.listenerToken.remove();
  },

  _hover: function() {
    this.setState({hovered: true});
  },

  _unhover: function() {
    this.setState({hovered: false});
  },

  _getCartIndex: function(e) {
    e.preventDefault();
    HashHistory.push('/cart/' + this.state.cart.id);
  },

  _getOrderIndex: function(e) {
    e.preventDefault();
    HashHistory.push('/orders');
  },

  _clearCart: function() {
    OrderActions.removeOrder(this.state.cart.id, function() {
      this._unhover();
    }.bind(this));
  },

  render: function() {
    var estilo = {
      backgroundImage: "url('/assets/shopping_cart_icon.png')",
      backgroundSize: '50px 50px'
    }
    var calcStyle = {
      top: '48px',
      left: '-55px'
    };
    var manageCart;
    var clearCart;
    if (this.state.cart.id) {
      manageCart = (
        <li className="cart-dd-item" onClick={this._getCartIndex}>
          Manage Cart
        </li>
      );
      clearCart = (
        <li className="cart-dd-item" onClick={this._clearCart}>
          Clear Cart
        </li>
      );
    }
    var cartIndex;
    // var cartIndex = (
    //   <li className="cart-dd-item" onClick={this._getOrderIndex}>
    //     View All Orders
    //   </li>
    // );
    var cartTotal = "Order total: $" + OrderStore.getCurrentOrderTotal().toFixed(2);
    var forDropdown = (
      <ul className="shopping-cart-dropdown">
        {manageCart}
        {clearCart}
        {cartIndex}
        {cartTotal}
      </ul>
    );
    return (
      <div className="cart-icon droppable"
        style={estilo}
        onMouseEnter={this._hover}
        onMouseLeave={this._unhover}>
        <h3 id="cart-size">{OrderStore.currentOrderSize()}</h3>
        <Dropdown text={forDropdown}
          receivedFocus={this.state.hovered}
          visible={this.state.hovered}
          calcStyle={calcStyle}/>
      </div>
    );
  }

});

module.exports = ShoppingCartIcon;
