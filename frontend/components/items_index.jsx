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
    var items;
    if(this.props.fetchedByOrder) {
      items = null;
    } else {
      items = ItemStore.all();
      items.forEach(function(item) {
        var picUrl = item.product_pic_url;
        if (!picUrl.match("/w_300,c_scale")) {
          item.product_pic_url = picUrl.replace("/image/upload", "/image/upload/w_300,c_scale");
        }
      });
    }
    return {
      associatedStore: associatedStore,
      items: items,
      createItemOpen: false
    };
  },

  updateItems: function() {
    var items;
    if(this.props.fetchedByOrder) {
      items = null;
    } else {
      items = ItemStore.all();
      items.forEach(function(item) {
        var picUrl = item.product_pic_url;
        if (!picUrl.match("/w_300,c_scale")) {
          item.product_pic_url = picUrl.replace("/image/upload", "/image/upload/w_300,c_scale");
        }
      });
    }
    this.setState({items: items})
  },

  componentDidMount: function() {
    this.itemListenerToken = ItemStore.addListener(this.updateItems);
    if (!this.props.fetchedBySearch) {
      if(this.props.fetchedByOrder !== undefined) {
        ItemActions.fetchItemsByOrder(this.props.fetchedByOrder);
      } else {
        ItemActions.fetchItems(this.props.params.store_id);
      }
    }
  },

  componentWillReceiveProps(nextProps) {
    var sortedItems;
    switch (nextProps.filteredBy) {
      case "Most Favorited":
        sortedItems = this.state.items.sort(this._compareFavs.bind(this,1));
        this.setState({ items: sortedItems });
        break;
      case "Least Favorited":
        sortedItems = this.state.items.sort(this._compareFavs.bind(this,-1));
        this.setState({items: sortedItems});
        break;
    }
  },

  componentWillUnmount: function() {
    this.itemListenerToken.remove();
  },

  _startNewItem: function() {
    this.setState({createItemOpen: true})
  },

  _compareFavs: function(type, item1, item2) {
    favs1 = item1.favorites.length;
    favs2 = item2.favorites.length;
    if (favs1 < favs2) {
      return type * 1;
    } else if (favs1 === favs2) {
      return 0;
    } else {
        return type * -1
    }
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
      if (this.state.associatedStore && stores.includes(this.state.associatedStore.id)) {
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
