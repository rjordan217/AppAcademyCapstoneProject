var React = require('react');

var ShoppingCartIcon = React.createClass({

  getInitialState: function() {
    return {
      cart: ["hi", "I", "am", "a", "shopping", "cart"]
    };
  },

  render: function() {
    var estilo = {
      backgroundImage: "url('/assets/shopping_cart_icon.png')",
      backgroundSize: '50px 50px'
    }
    return (
      <div className="cart-icon" style={estilo}>
        <h3 id="cart-size">{this.state.cart.length}</h3>
      </div>
    );
  }

});

module.exports = ShoppingCartIcon;
