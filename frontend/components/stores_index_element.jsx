var React = require('react');

var StoresIndexElement = React.createClass({
  _clickedForDetail: function (e) {
    // TODO: Have this return item details
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
