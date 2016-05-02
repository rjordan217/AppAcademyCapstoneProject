var React = require('react'),
    FavoriteButton = require('./favorite_button'),
    CurrentUserStateMixin = require('../mixins/current_user_state'),
    HashHistory = require('react-router').hashHistory;

var StoresIndexElement = React.createClass({
  mixins: [CurrentUserStateMixin],
  _clickedForDetail: function (e) {
    // TODO: Have this return item details
    e.preventDefault();
    HashHistory.push('stores/' + this.props.store.id);
  },
  render: function() {
    var store = this.props.store;
    return (
      <div className="store-index-el"
        onClick={this._clickedForDetail}>
        <img src={store.main_pic_url} />
        <h3>{store.store_name}</h3>
        {this.state.currentUser.username ? <FavoriteButton favorites={store.favorites}
          favoritable={{type: "Store", id: store.id}} /> : null}
      </div>
    );
  }

});
// {store.main_pic_url}
module.exports = StoresIndexElement;
