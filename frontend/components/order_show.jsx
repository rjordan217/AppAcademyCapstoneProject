var React = require('react'),
    OrderTable = require('./order_table'),
    OrderStore = require('../stores/order_store'),
    ItemsIndex = require('./items_index'),
    HashHistory = require('react-router').hashHistory;

var OrderShow = React.createClass({

  getInitialState: function() {
    return {
      empty: !OrderStore.getCurrentOrder().itemRequests.length
    };
  },

  componentDidMount: function() {
    this.orderListener = OrderStore.addListener(this._storeChange);
  },

  _storeChange: function() {
    this.setState({empty: !OrderStore.getCurrentOrder().itemRequests.length});
  },

  componentWillUnmount: function() {
    this.orderListener.remove();
  },

  render: function() {
    if(this.state.empty) setTimeout(HashHistory.push.bind(HashHistory,"/stores"), 2000);
    return (
      <div className="order-show">
        {this.state.empty ? <div id="items-index"><h3>Shopping cart is empty! Redirecting...</h3></div>
          : <ItemsIndex fetchedByOrder={this.props.params.cart_id} />}
        <div className="order-details">
          <OrderTable empty={this.state.empty} />
        </div>
      </div>
    );
  }

});

module.exports = OrderShow;
