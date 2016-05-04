var React = require('react'),
    FavoriteButton = require('./favorite_button'),
    CurrentUserStateMixin = require('../mixins/current_user_state'),
    HashHistory = require('react-router').hashHistory;

var ItemIndexElement = React.createClass({
  mixins: [CurrentUserStateMixin],

  _getDetail: function() {
    HashHistory.push('/stores/' + this.props.item.store_id + '/items/' + this.props.item.id);
  },

  render: function() {
    var item = this.props.item;
    return (
      <div className="item-index-el" onClick={this._getDetail}>
        <img src={item.product_pic_url} />
        <h3>{item.title}</h3>
        <p>{item.price.toFixed(2)}</p>
        {this.state.currentUser.username ? <FavoriteButton favorites={item.favorites}
          favoritable={{type: "Item", id: item.id}}
          itemName={item.title} /> : null}
      </div>
    );
  }

});

module.exports = ItemIndexElement;
