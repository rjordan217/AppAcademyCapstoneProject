var React = require('react'),
    HashHistory = require('react-router').hashHistory;

var StoresIndexElement = React.createClass({
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
        <img src="/assets/default_store_pic.png" />
        {store.store_name}
      </div>
    );
  }

});
// {store.main_pic_url}
module.exports = StoresIndexElement;
