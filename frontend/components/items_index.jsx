var React = require('react'),
    ItemIndexElement = require('./item_index_element.jsx'),
    ItemStore = require('../stores/item_store'),
    SellerStore = require('../stores/seller_store'),
    CurrentUserStateMixin = require('../mixins/current_user_state'),
    Modal = require('react-modal'),
    NewItemForm = require('./new_item_form'),
    createModalStyle = require('../styles/create_item_modal'),
    ItemActions = require('../actions/item_actions');

var ItemsIndex = React.createClass({
  mixins: [CurrentUserStateMixin],

  getInitialState: function() {
    var associatedStore = (this.props.fetchedBySearch ?
      null : SellerStore.getSellerById(this.props.params.store_id));
    return {
      associatedStore: associatedStore,
      items: ItemStore.all(),
      createItemOpen: false
    };
  },
  updateItems: function() {
    this.setState({items: ItemStore.all()})
  },

  componentDidMount: function() {
    this.itemListenerToken = ItemStore.addListener(this.updateItems);
    if (!this.props.fetchedBySearch) {
      ItemActions.fetchItems(this.props.params.store_id);
    }

  },
  componentWillUnmount: function() {
    this.itemListenerToken.remove();
  },

  _startNewItem: function() {
    this.setState({createItemOpen: true})
  },

  closeModal: function() {
    this.setState({
      createItemOpen: false
    });
  },

  render: function() {

    var content = this.state.items.map(function(item) {
      return <ItemIndexElement location={this.props.location} item={item} key={item.id} />;
    }.bind(this));
    var currentUser = this.state.currentUser;
    if (currentUser.username) {
      var stores = this.state.currentUser.stores.map(function(store) {
        return store.id;
      });
      if (stores.includes(this.state.associatedStore.id)) {
        content.push(
          <div className="item-index-el" key={-1}>
            <h3>Add Item</h3>
            <button onClick={this._startNewItem}>+</button>
            <Modal
              isOpen={this.state.createItemOpen}
              onRequestClose={this.closeModal}
              style={createModalStyle}>
              <NewItemForm store={this.state.associatedStore}
                closeModalFun={this.closeModal} />
            </Modal>
          </div>
        );
      }
    }
    if (content.length === 0 && this.props.fetchedBySearch) {
      content = <h3>No items matched this search.</h3>;
    }
    return (
      <div id='items-index'>
        {content}

      </div>
    );
  }

});

module.exports = ItemsIndex;
