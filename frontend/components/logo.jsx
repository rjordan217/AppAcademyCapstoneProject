var React = require('react'),
    HashHistory = require('react-router').hashHistory;

var Logo = React.createClass({

  _goHome: function() {
    HashHistory.push('/stores');
  },

  render: function() {
    return (
      <div className="nav-logo">
        <img src='/assets/petsy_logo.png'
          onClick={this._goHome}
          data-intro="Welcome to Petsy! To navigate back to the stores page at any
          time, click this logo."
          data-step="1"/>
      </div>
    );
  }

});

module.exports = Logo;
