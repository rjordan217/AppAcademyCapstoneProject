var React = require('react'),
    FavoriteButton = require('./favorite_button'),
    ItemRequestButton = require('./item_request_button'),
    CurrentUserStateMixin = require('../mixins/current_user_state'),
    HashHistory = require('react-router').hashHistory;

var ItemIndexElement = React.createClass({
  mixins: [CurrentUserStateMixin],

  getInitialState: function() {
    return {
      hovered: false
    };
  },

  _getDetail: function() {
    HashHistory.push('/stores/' + this.props.item.store_id + '/items/' + this.props.item.id);
  },

  _setHovered: function() {
    this.setState({hovered: true});
  },

  _resetHovered: function() {
    this.setState({hovered: false});
  },

  render: function() {
    var item = this.props.item;
    var buttons = (
      <div className="index-buttons item-buttons">
        <FavoriteButton favorites={item.favorites}
          favoritable={{type: "Item", id: item.id}} 
          itemName={item.title} />
        <ItemRequestButton itemId={item.id} />
      </div>
    );
    return (
      <div className="item-index-el liftable"
        onClick={this._getDetail}>
        {buttons}
        <img src={item.product_pic_url} />
        <div className="item-data">
          <p>{item.title}</p>
          <p>${item.price.toFixed(2)}</p>
        </div>
      </div>
    );
  }

});

module.exports = ItemIndexElement;
