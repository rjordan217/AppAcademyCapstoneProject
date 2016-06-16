var React = require('react'),
    ImageUpload = require('./image_upload'),
    ItemActions = require('../actions/item_actions');

var NewItemForm = React.createClass({

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

  _updateTitle: function(e) {
    this.setState({title: e.target.value});
  },

  _updatePrice: function(e) {
    this.setState({price: e.target.value});
  },

  _updateDescription: function(e) {
    this.setState({description: e.target.value});
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
              <input id="title"
                type="text"
                value={this.state.title}
                onChange={this._updateTitle} />
            </label>
            <br />

            <label>Price:
              <input id="price"
                type="number"
                step=".01"
                value={this.state.price}
                onChange={this._updatePrice} />
            </label>
            <br />

            <label>Description:
              <textarea id="description"
                value={this.state.description}
                onChange={this._updateDescription}
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
