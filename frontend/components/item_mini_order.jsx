var React = require('react'),
    OrderStore = require('../stores/order_store'),
    OrderActions = require('../actions/order_actions'),
    ItemRequestActions = require('../actions/item_request_actions');

var ItemMiniOrder = React.createClass({

  getInitialState: function() {
    return {
      quantity: 1
    };
  },

  _requestItem: function(e) {
    var currentOrder = OrderStore.getCurrentOrder();
    var itemId = this.props.itemData.id;
    if (currentOrder.id !== null) {
      ItemRequestActions.addItemRequest(
        currentOrder.id,
        itemId,
        this.state.quantity
      );
    } else {
      OrderActions.newOrder(function(freshOrder) {
        ItemRequestActions.addItemRequest(
          freshOrder.id,
          itemId,
          this.state.quantity
        );
      }.bind(this));
    }
  },

  _updateQuantity: function(e) {
    var val = e.target.value;
    if(val >= 0) this.setState({quantity: val});
  },

  render: function() {
    var quant = this.state.quantity,
        precio = this.props.itemData.price;
    return (
      <div className="mini-order">
        <div>
          <input type="number"
            value={quant}
            onChange={this._updateQuantity} />
          <p>x ${precio.toFixed(2)}</p>
        </div>
        <p>Total Cost for Item{quant > 1 ? 's' : null}: ${ (quant * precio).toFixed(2) }</p>
        <button onClick={this._requestItem}>Add to Order</button>
      </div>
    );
  }

});

module.exports = ItemMiniOrder;
