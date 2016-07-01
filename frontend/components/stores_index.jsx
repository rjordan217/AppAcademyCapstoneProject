var React = require('react'),
    SellerStore = require('../stores/seller_store'),
    SellerActions = require('../actions/seller_actions'),
    ImageCarousel = require('./image_carousel'),
    NewStoreForm = require('./new_store_form'),
    CurrentUserStateMixin = require('../mixins/current_user_state'),
    createStoreModalStyle = require('../styles/create_store_modal'),
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
    var vendedores = SellerStore.all();
    var store_scaling,
        item_scaling;
    if(screen.width <= 480) {
      store_scaling = "/w_562,c_scale";
      item_scaling = "/w_188,c_scale";
    } else {
      store_scaling = "/w_300,c_scale";
      item_scaling = "/w_100,c_scale";
    }
    vendedores.forEach(function(store) {
      var picUrl = store.main_pic_url;
      if (!picUrl.match(store_scaling)) {
        store.main_pic_url = picUrl.replace("/image/upload", "/image/upload" + store_scaling);
      }

      var itemPicsUrls = store.featured_pics;
      for(var idx = 0; idx < itemPicsUrls.length; idx++) {
        if(!itemPicsUrls[idx].match(item_scaling)) {
          store.featured_pics[idx] = itemPicsUrls[idx].replace(
            "/image/upload",
            "/image/upload" + item_scaling
          );
        }
      }
    });
    this.setState({stores: vendedores})
  },

  componentDidMount: function() {
    this.updateStoresToken = SellerStore.addListener(this._onStoresUpdate);
    if (!this.props.fetchedBySearch) {
      SellerActions.fetchStores();
    }
  },

  componentWillReceiveProps(nextProps) {
    var sortedStores;
    switch (nextProps.filteredBy) {
      case "Most Favorited":
        sortedStores = this.state.stores.sort(this._compareFavs.bind(this,1));
        this.setState({ stores: sortedStores });
        break;
      case "Least Favorited":
        sortedStores = this.state.stores.sort(this._compareFavs.bind(this,-1));
        this.setState({stores: sortedStores});
        break;
    }
  },

  componentWillUnmount: function() {
    this.updateStoresToken.remove();
  },

  _startNewStore: function() {
    this.setState({createStoreOpen: true});
  },

  _compareFavs: function(type, store1, store2) {
    favs1 = store1.favorites.length;
    favs2 = store2.favorites.length;
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

    if (this.state.currentUser.username && !this.props.fetchedBySearch) {

      content.push(
        <div className="store-index-el" key={-1}>
          <h3>Create Your Own Store</h3>
          <button onClick={this._startNewStore}>+</button>
          <Modal
            isOpen={this.state.createStoreOpen}
            onRequestClose={this.closeModal}
            style={createStoreModalStyle}>
            <NewStoreForm closeModalFun={this.closeModal} />
          </Modal>
        </div>
      );
    }

    return (
      <div className="index-container">
        { !this.props.fetchedBySearch ? <ImageCarousel /> : null}
        <div className="stores-index">
          {content}
        </div>
      </div>
    );
  }

});

module.exports = StoresIndex;
