var React = require('react'),
    NavBar = require('./nav_bar'),
    ImageCarousel = require('./image_carousel'),
    StoresIndex = require('./stores_index');

var Main = React.createClass({

  render: function() {
    return (
      <div className="main">
        <NavBar />
        <div className="index-container">
          <ImageCarousel />
          <StoresIndex />
        </div>
      </div>
    );
  }

});

module.exports = Main;
