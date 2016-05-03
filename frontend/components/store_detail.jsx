var React = require('react'),
    SellerStore = require('../stores/seller_store'),
    SellerActions = require('../actions/seller_actions');

var StoreDetail = React.createClass({

  getInitialState: function() {
    return {
      store: SellerStore.getSellerById(this.props.params.store_id)
    };
  },

  updateStore: function() {
    this.setState({store: SellerStore.getSellerById(this.props.params.store_id)})
  },

  componentDidMount: function() {
    this.listenerToken = SellerStore.addListener(this.updateStore);
    SellerActions.fetchStoreDetail(this.props.params.store_id);
  },

  componentWillUnmount: function() {
    this.listenerToken.remove();
  },

  render: function() {
    var content;
    var store = this.state.store;
    if (store === undefined) {
      content = <div><p>Sorry, the store you requested does not exist.</p></div>;
    } else {
      content = (
        <div className="primary-content">
          <div className="store-detail">
            <img src={store.main_pic_url} />
            <h2>{store.store_name}</h2>
            <p>{store.description}</p>
          </div>
          {this.props.children}
        </div>
      );
    }
    return content;
  }

});

module.exports = StoreDetail;
