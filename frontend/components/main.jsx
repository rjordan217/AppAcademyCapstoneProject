var React = require('react'),
    StoresIndex = require('./stores_index'),
    HashHistory = require('react-router').hashHistory;

var Main = React.createClass({
  _directToStores: function(e) {
    e.preventDefault();
    HashHistory.push('/stores');
  },

  render: function() {
    return (
      <div className="main">
        <h1>Petsy - Your Specialty Pet Marketplace!</h1>
        <button onClick={this._directToStores}>Get Started →</button>
      </div>
    );
  }

});

module.exports = Main;
