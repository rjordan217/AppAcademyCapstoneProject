var React = require('react'),
    SellerStore = require('../stores/seller_store'),
    SellerActions = require('../actions/seller_actions'),
    ImageCarousel = require('./image_carousel'),
    NewStoreForm = require('./new_store_form'),
    CurrentUserStateMixin = require('../mixins/current_user_state'),
    Modal = require('react-modal'),
    StoresIndexElement = require('./stores_index_element');


var StoresIndex = React.createClass({

  mixins: [ CurrentUserStateMixin ],

  getInitialState: function() {
    return {
      stores: SellerStore.all(),
      createStoreOpen: false
    };
  },

  _onStoresUpdate: function () {
    this.setState({stores: SellerStore.all()})
  },

  componentDidMount: function() {
    this.updateStoresToken = SellerStore.addListener(this._onStoresUpdate);
    if (!this.props.fetchedBySearch) {
      SellerActions.fetchStores();
    }
  },

  componentWillUnmount: function() {
    this.updateStoresToken.remove();
  },

  _startNewStore: function() {
    this.setState({createStoreOpen: true})
  },

  closeModal: function() {
    this.setState({
      createStoreOpen: false
    });
  },

  render: function() {
    var content = this.state.stores.map(function (store) {
      return <StoresIndexElement key={store.id} store={store} />;
    });

    if (content.length === 0 && this.props.fetchedBySearch) {
      content = [<h3 key={1}>No stores matched this search.</h3>];
    }
//TODO
    if (this.state.currentUser.username) {

      var createModalStyle = {};

      content.push(
        <div className="store-index-el" key={-1}>
          <h3>Create Your Own Store</h3>
          <button onClick={this._startNewStore}>+</button>
          <Modal
            isOpen={this.state.createStoreOpen}
            onRequestClose={this.closeModal}
            style={createModalStyle}>
            <NewStoreForm closeModalFun={this.closeModal} />
          </Modal>
        </div>
      );
    }

    return (
      <div className="index-container">
        <ImageCarousel />
        <div className="stores-index">
          {content}
        </div>
      </div>
    );
  }

});

module.exports = StoresIndex;
