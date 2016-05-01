var React = require('react'),
    HashHistory = require('react-router').hashHistory;

var ItemIndexElement = React.createClass({

  _getDetail: function() {
    HashHistory.push(this.props.location.pathname + '/items/' + this.props.item.id);
  },

  render: function() {
    var item = this.props.item;
    return (
      <div className="item-index-el" onClick={this._getDetail}>
        <img src={item.product_pic_url} />
        <h3>{item.title}</h3>
        <p>{item.price.toFixed(2)}</p>
      </div>
    );
  }

});

module.exports = ItemIndexElement;
