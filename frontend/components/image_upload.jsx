var React = require('react');

var ImageUpload = React.createClass({
  getInitialState: function() {
    return {
      imageUrl: this.props.defaultURL
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
      background: "white url('" + this.state.imageUrl + "') no-repeat center"
    };
    var buttonText;
    switch (this.props.formType) {
      case "user":
        buttonText = "Set Profile Picture";
        break;
      case "store":
        buttonText = "Set Main Store Picture";
        break;
      case "item":
        buttonText = "Set Item Picture";
        break;
      }
    return (
      <div className="image-upload" style={profPicPOJO}>
        <button onClick={this._upload}>{buttonText}</button>
      </div>
    );
  }

});

module.exports = ImageUpload;
