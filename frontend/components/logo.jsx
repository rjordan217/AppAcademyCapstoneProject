var React = require('react');

var Logo = React.createClass({

  render: function() {
    return (
      <div className="nav-logo">
        <img src='/assets/petsy_logo.png' />
      </div>
    );
  }

});

module.exports = Logo;
