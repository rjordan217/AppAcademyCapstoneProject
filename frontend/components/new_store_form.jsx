var React = require('react'),
    CurrentUserStateMixin = require('../mixins/current_user_state'),
    SellerActions = require('../actions/seller_actions'),
    ImageUpload = require('./image_upload');

var NewStoreForm = React.createClass({

  mixins: [CurrentUserStateMixin],

  getInitialState: function() {
    return {
      main_pic_url: "/assets/default_store_pic.png",
      store_name: "",
      description: "Describe your store..."
    };
  },

  _passUpImageUrl: function(url) {
    if (this.state.main_pic_url !== url) {
      this.setState({main_pic_url: url});
    }
  },

  _submitStore: function() {
    SellerActions.create(this.state, this.props.closeModalFun);
  },

  _setEmpty: function() {
    if (this.state.description === "Describe your store...") {
      this.setState({description: ""});
    }
  },

  _updateStoreName: function(e) {
    this.setState({store_name: e.target.value});
  },

  _updateDescription: function(e) {
    this.setState({description: e.target.value});
  },

  render: function() {

    return (
      <div className="new-store-form">
        <button onClick={this.props.closeModalFun} className="close-modal">x</button>

        <h2>Create your own store!</h2>

        <ImageUpload passUrlToParent={this._passUpImageUrl}
          defaultURL={this.state.main_pic_url} formType="store" />
        <div className="input">
          <div className="input-data">
            <label>Store Name:
              <input id="store_name"
                type="text"
                value={this.state.store_name}
                onChange={this._updateStoreName} />
            </label>
            <br />

            <label>Description:</label>
              <textarea id="description"
                value={this.state.description}
                onChange={this._updateDescription}
                onFocus={this._setEmpty}></textarea>

            <br />
          </div>

          <button className="create-button"
            onClick={this._submitStore}>Create Store</button>
        </div>
      </div>
    );
  }

});

module.exports = NewStoreForm;
