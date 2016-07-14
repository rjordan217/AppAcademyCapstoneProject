var React = require('react'),
    Slider = require('react-slick');

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

  render: function () {
    var settings = {
      dots: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000,
      lazyLoad: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="image-carousel">
        <Slider {...settings}>
          <div>
            <div className="carousel-pic">{CAROUSEL_PICS[0]}</div>
            {CAROUSEL_HEADERS[0]}
            <hr />
            {CAROUSEL_TEXTS[0]}
            <hr />
          </div>
          <div>
            <div className="carousel-pic">{CAROUSEL_PICS[1]}</div>
            {CAROUSEL_HEADERS[1]}
            <hr />
            {CAROUSEL_TEXTS[1]}
            <hr />
          </div>
          <div>
            <div className="carousel-pic">{CAROUSEL_PICS[2]}</div>
            {CAROUSEL_HEADERS[2]}
            <hr />
            {CAROUSEL_TEXTS[2]}
            <hr />
          </div>
        </Slider>
      </div>
    );
  }
});

module.exports = ImageCarousel;
