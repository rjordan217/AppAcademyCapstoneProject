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

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.empty) {
      this.setState({itemReqs: null});
    }
  },

  _updateItemReqs: function() {
    this.setState({itemReqs: OrderStore.getCurrentOrder().itemRequests});
  },

  generateRows: function() {
    var subTotal = 0;
    if (this.state.itemReqs) {
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
    } else {
      return (
        <tbody>
          <tr>
            <td>N/A</td>
            <td>N/A</td>
            <td>${subTotal.toFixed(2)}</td>
          </tr>
        </tbody>
      )
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
