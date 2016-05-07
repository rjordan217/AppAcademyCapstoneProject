var React = require('react'),
    ImageUpload = require('./image_upload'),
    ItemActions = require('../actions/item_actions'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var NewItemForm = React.createClass({

  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {
      product_pic_url: "/assets/default_item_pic.png",
      title: "",
      description: "Describe your product...",
      price: 0.01
    };
  },

  _passUpImageUrl: function(url) {
    if (this.state.product_pic_url !== url) {
      this.setState({product_pic_url: url});
    }
  },

  _submitItem: function() {
    itemParams = Object.assign({}, this.state);
    itemParams['store_id'] = this.props.store.id;
    ItemActions.create(itemParams, this.props.closeModalFun);
  },

  _setEmpty: function() {
    if (this.state.description === "Describe your product...") {
      this.setState({description: ""});
    }
  },

  render: function() {

    return (
      <div className="new-item-form">
        <button onClick={this.props.closeModalFun} className="close-modal">x</button>

        <h2>Add a new product to your store!</h2>

        <ImageUpload passUrlToParent={this._passUpImageUrl}
          defaultURL={this.state.product_pic_url} formType="item" />

        <div className="input">

          <div className="input-data">
            <label>Title:
              <input id="title" type="text" valueLink={this.linkState("title")} />
            </label>
            <br />

            <label>Price:
              <input id="price" type="number" step=".01" valueLink={this.linkState("price")} />
            </label>
            <br />
            
            <label>Description:
              <textarea id="description"
                valueLink={this.linkState("description")}
                onFocus={this._setEmpty}></textarea>
            </label>
            <br />

          </div>

          <button onClick={this._submitItem} className="create-button">Create Product</button>
        </div>
      </div>
    );
  }

});

module.exports = NewItemForm;
