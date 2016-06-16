var React = require('react'),
    Dropdown = require('./dropdown'),
    ItemRequestActions = require('../actions/item_request_actions'),
    OrderActions = require('../actions/order_actions'),
    OrderStore = require('../stores/order_store');

var ItemRequestButton = React.createClass({
  getInitialState: function() {
    var quantite = 0;
    var id = this.props.itemId;
    OrderStore.getCurrentOrder().itemRequests.forEach(function(itemRequest) {
      if (itemRequest.item_id === id) {
        quantite = itemRequest.quantity;
      }
    });
    return {
      currentUser: UserStore.getCurrentUser(),
      ordered: quantite,
      hovered: false
    };
  },

  componentDidMount: function() {
    this.userListenerToken = UserStore.addListener(this.updateUser);
    this.orderListenerToken = OrderStore.addListener(this.setOrdered);
  },

  updateUser: function() {
    this.setState({
      currentUser: UserStore.getCurrentUser()
    });
  },

  setOrdered: function() {
    var quantite = 0;
    var id = this.props.itemId;
    OrderStore.getCurrentOrder().itemRequests.forEach(function(itemRequest) {
      if (itemRequest.item_id === id) {
        quantite = itemRequest.quantity;
      }
    });
    this.setState({ordered: quantite});
  },

  _promptLogin: function(e) {
    if (e.stopPropagation) e.stopPropagation();
    if (e.cancelBubble!=null) e.cancelBubble = true;

    alert("Please login or register to build a shopping cart.");
  },

  _requestItem: function(e) {
    if (e.stopPropagation) e.stopPropagation();
    if (e.cancelBubble!=null) e.cancelBubble = true;

    var currentOrder = OrderStore.getCurrentOrder();
    var itemId = this.props.itemId;
    if (currentOrder.id !== null) {
      ItemRequestActions.addItemRequest(
        currentOrder.id,
        itemId,
        1
      );
    } else {
      OrderActions.newOrder(function(freshOrder) {
        ItemRequestActions.addItemRequest(
          freshOrder.id,
          itemId,
          1
        );
      }.bind(this));
    }
  },

  componentWillUnmount: function() {
    this.userListenerToken.remove();
    this.orderListenerToken.remove();
  },

  _hovered: function() {
    this.setState({hovered: true});
  },

  _unhovered: function() {
    this.setState({hovered: false});
  },

  render: function() {
    var text;
    var clickAction;
    if(this.state.currentUser.username) {
      text = <p>{this.state.ordered} total ordered</p>;
      clickAction = this._requestItem;
    } else {
      text = <p>Login to order item.</p>;
      clickAction = this._promptLogin;
    }
    var estilo = {
      color: 'gold',
      textShadow: '0 0 2px #000',
      textWeight: 'bold'
    };
    var calcStyle = {
      top: '30px',
      left: '-70px'
    };
    return (
      <div className="item-request-button droppable">
        <Dropdown text={text}
          visible={this.state.hovered}
          calcStyle={calcStyle}/>
        <button onClick={clickAction}
          onMouseEnter={this._hovered}
          onMouseLeave={this._unhovered}
          style={this.state.ordered ? estilo : null}>+</button>
      </div>
    );
  }

});

module.exports = ItemRequestButton;
