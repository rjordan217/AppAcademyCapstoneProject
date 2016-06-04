var React = require('react'),
    OrderStore = require('../stores/order_store'),
    ItemStore = require('../stores/item_store');

var OrderTable = React.createClass({

  getInitialState: function() {
    return {
      itemReqs: null
    };
  },

  componentDidMount: function() {
    this.itemReqListener = ItemStore.addListener(this._updateItemReqs);
  },

  componentWillUnmount: function() {
    this.itemReqListener.remove();
  },

  _updateItemReqs: function() {
    this.setState({itemReqs: OrderStore.getCurrentOrder().itemRequests});
  },

  generateRows: function() {
    if (this.state.itemReqs) {
      var subTotal = 0;
      return (
        <tbody>
        {
          this.state.itemReqs.map(function(itemReq,idx) {
            var itemTotal = itemReq.price * itemReq.quantity;
            subTotal += itemTotal;
            return (
              <tr key={idx}>
                <td>{ItemStore.getItemById(itemReq.item_id).title}</td>
                <td className="quant">{itemReq.quantity}</td>
                <td className="det-price">${itemTotal.toFixed(2)}</td>
              </tr>
            );
          })
        }
          <tr>
            <td></td>
            <th>Subtotal:</th>
            <td className="det-price">${subTotal.toFixed(2)}</td>
          </tr>
        </tbody>
      );
    }
  },

  render: function() {
    return (
      <table className="order-table">
        <thead>
          <tr>
            <th>
              Item Name
            </th>
            <th>
              Quantity
            </th>
            <th>
              Total Price
            </th>
          </tr>
        </thead>
        {this.generateRows()}
      </table>
    );
  }

});

module.exports = OrderTable;
