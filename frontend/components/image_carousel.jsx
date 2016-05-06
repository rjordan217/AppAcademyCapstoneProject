var React = require('react');

var CAROUSEL_PICS = [];
for(var i = 0; i < 3; i++) {
  CAROUSEL_PICS.push(<img src={"/assets/index_carousel/img" + i + ".jpg"} />);
}

var CAROUSEL_HEADERS = [
  <h2>The Best for Your Best Little Buddies</h2>,
  <h2>Help Your Pet Stay Active!</h2>,
  <h2>Healthy Mind, Healthy Life</h2>
];
var CAROUSEL_TEXTS = [
  <p>Here at Petsy, we love animals and think they deserve the best treatment
possible! Whether your pets are energetic and playful or a bit more on the
reserved side, Petsy has everything you need to keep your animals happy, healthy,
and well-loved!</p>,
  <p>Many of our sellers here on Petsy understand the importance of physical
activity to an animals health, and have spent years developing fun and innovative
ways for pets to get exercise! Browse our many options to find products to build
obstacle courses and much more!</p>,
  <p>We all loved to play with toys growing up, and pets are no exception! Toys
are crucial to the healthy mental development of your pet, so choose from our
many engaging options to make sure your pets have the time of their lives while
developing their brains!</p>
];

var ImageCarousel = React.createClass({

  getInitialState: function() {
    return {
      carouselIndex: 0
    };
  },

  changeIndex: function() {
    this.setState({carouselIndex: (this.state.carouselIndex + 1) % 3});
  },

  componentDidMount: function() {
    this.intervalToken = setInterval(this.changeIndex, 5000);
  },

  componentWillUnmount: function() {
    clearInterval(this.intervalToken);
  },

  render: function() {
    var idx = this.state.carouselIndex;
    return (
      <div className="image-carousel">
        {CAROUSEL_PICS[idx]}
        {CAROUSEL_HEADERS[idx]}
        {CAROUSEL_TEXTS[idx]}
      </div>
    );
  }

});

module.exports = ImageCarousel;
