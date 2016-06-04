var React = require('react'),
    OrderTable = require('./order_table'),
    OrderStore = require('../stores/order_store'),
    ItemsIndex = require('./items_index');

var OrderShow = React.createClass({

  // TODO: Make OrderShow react to cart changes

  render: function() {
    var subTotal = 0;

    return (
      <div className="order-show">
        <ItemsIndex fetchedByOrder={this.props.params.cart_id} />
        <div className="order-details">
          <OrderTable />
        </div>
      </div>
    );
  }

});

module.exports = OrderShow;
