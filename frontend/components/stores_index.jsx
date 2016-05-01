var React = require('react'),
    SellerStore = require('../stores/seller_store'),
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
    this.updateStoresToken = SellerStore.addListener(this._onStoresUpdate);
    if (!this.props.fetchedBySearch) {
      SellerActions.fetchStores();
    }
  },
  componentWillUnmount: function() {
    this.updateStoresToken.remove();
  },
  render: function() {
    var content = this.state.stores.map(function (store) {
      return <StoresIndexElement key={store.id} store={store} />;
    });
    if (content.length === 0 && this.props.fetchedBySearch) {
      content = <h3>No stores matched this search.</h3>;
    }
    return (
      <div className="stores-index">
        {content}
      </div>
    );
  }

});

module.exports = StoresIndex;
