var React = require('react'),
    CarouselElement = require('./carousel_element');

var ImageCarousel = React.createClass({

  getInitialState: function() {
    return {
      counter: 0,
      carouselInt: null,
      carouselEls: null
    };
  },

  componentDidMount: function() {
    var carouselEls = document.getElementsByClassName('carousel-element');
    this.setState({carouselEls: carouselEls});
    setTimeout(this.setCarouselHeight, 50);
  },

  setCarouselHeight: function() {
    if (this.state.carouselEls) {
      var border = document.getElementById('carousel-border');
      var currentEl = this.state.carouselEls[this.state.counter];
      border.style.height = currentEl.offsetHeight.toString() + "px";
      clearInterval(this.state.carouselInt);
      this.setState({carouselInt: setInterval(this.incrementCounterAndShift, 7000)});
    }
  },

  shiftCarouselElements: function() {
    if(this.state.carouselEls) {
      this.setCarouselHeight();
      var carouselEls = this.state.carouselEls;
      var counter = this.state.counter;

      carouselEls[counter].style.left = "0";
      carouselEls[counter].style.zIndex = "1";

      carouselEls[(counter + 1) % 3 ].style.left = "100%";
      carouselEls[(counter + 1) % 3 ].style.zIndex = "-1";

      carouselEls[(counter + 2) % 3].style.left = "-100%";
      carouselEls[(counter + 2) % 3].style.zIndex = "0";
    }
  },

  incrementCounterAndShift: function() {
    this.setState({counter: (this.state.counter + 1) % 3});
    setTimeout(this.shiftCarouselElements, 50);
  },

  decrementCounterAndShift: function() {
    this.setState({counter: (this.state.counter + 2) % 3});
    setTimeout(this.shiftCarouselElements, 50);
  },

  render: function () {
    var carouselEls = [
      <CarouselElement elNumber={0} key={0} />,
      <CarouselElement elNumber={1} key={1} />,
      <CarouselElement elNumber={2} key={2} />
    ];

    var border = (
      <div id="carousel-border">
        {carouselEls}
      </div>
    );

    return (
      <section className="carousel-container">
        <button className="left-car" onClick={this.decrementCounterAndShift}>◀</button>
        <button className="right-car" onClick={this.incrementCounterAndShift}>▶</button>
        {border}
      </section>
    );
  }
});

module.exports = ImageCarousel;
