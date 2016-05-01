var React = require('react'),
    HashHistory = require('react-router').hashHistory;

var Logo = React.createClass({
  
  _goHome: function() {
    HashHistory.push('#');
  },

  render: function() {
    return (
      <div className="nav-logo">
        <img src='/assets/petsy_logo.png' onClick={this._goHome} />
      </div>
    );
  }

});

module.exports = Logo;
