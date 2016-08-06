var React = require('react'),
    CarouselData = require('../resources/carousel_data.jsx'),
    pics = CarouselData.pics,
    headers = CarouselData.headers,
    texts = CarouselData.texts;

var CarouselElement = React.createClass({

  render: function() {
    var id = this.props.elNumber;
    return (
      <figure className="carousel-element">
        <div>{pics[id]}</div>
        {headers[id]}
        <hr />
        {texts[id]}
        <hr />
      </figure>
    );
  }

});

module.exports = CarouselElement;
