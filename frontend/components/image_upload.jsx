var React = require('react');

var ImageUpload = React.createClass({
  getInitialState: function() {
    return {
      imageUrl: "/assets/default_profile_pic.jpg"
    };
  },
  componentWillMount: function() {
    this.props.passUrlToParent(this.state.imageUrl);
  },
  _upload: function() {
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(failed, uploadedImage) {
        if(failed === null) {
          this.setState({imageUrl: uploadedImage[0].url})
          this.props.passUrlToParent(uploadedImage[0].url);
        } else if (failed.message === "User closed widget") {
          console.log("User closed widget");
        } else {
          alert("Uh-oh, upload failed! Please try again.");
        }
      }.bind(this)
    );
  },
  render: function() {
    var profPicPOJO = {
      backgroundImage: "url('" + this.state.imageUrl + "')",
      backgroundSize: 'cover'
    };
    return (
      <div className="image-upload" style={profPicPOJO}>
        <button onClick={this._upload}>Set Profile Picture</button>
      </div>
    );
  }

});

module.exports = ImageUpload;
