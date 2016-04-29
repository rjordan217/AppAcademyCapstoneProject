var React = require('react'),
    SellerStore = require('../stores/sellers_store'),
    SellerActions = require('../actions/seller_actions'),
    StoresIndexElement = require('./stores_index_element');


var StoresIndex = React.createClass({
  getInitialState: function() {
    return {
      stores: []
    };
  },
  _onStoresUpdate: function () {
    this.setState({stores: SellerStore.all()})
  },
  componentDidMount: function() {
    SellerActions.fetchStores();
    this.updateStoresToken = SellerStore.addListener(this._onStoresUpdate);
  },
  render: function() {
    return (
      <div className="stores-index">
        {this.state.stores.map(function (store) {
          return <StoresIndexElement key={store.id} store={store} />;
        })}
      </div>
    );
  }

});

module.exports = StoresIndex;
