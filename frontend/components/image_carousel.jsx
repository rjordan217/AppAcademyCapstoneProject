var React = require('react');

var ImageCarousel = React.createClass({
  // getInitialState: function() {
  //   return {
  //     images: [],
  //     showingIndex: 0
  //   };
  // },
  // changeShowingIndex: function () {
  //   this.setState({showingIndex: this.state.showingIndex + 1});
  // },
  // componentDidMount: function() {
  //   var imgArray = [];
  //   var newImg;
  //   var imgCar = this;
  //   function loaded(imagen) {
  //     imgArray.push(imagen);
  //     imgCar.setState({images: imgArray});
  //   }
  //   for (i = 0; i < 3; i++) {
  //     newImg = <img src={"/assets/index_carousel/img" + i + ".jpg"} />
  //     newImg.onload = function() {
  //       console.log("loaded");
  //       loaded.bind(newImg);
  //     }
  //   }
  //   setInterval(imgCar.changeShowingIndex, 5000);
  // },

  render: function() {

    return (
      <div className="image-carousel">
        <img src="/assets/index_carousel/img0.jpg" />
      </div>
    );
  }

});

module.exports = ImageCarousel;
