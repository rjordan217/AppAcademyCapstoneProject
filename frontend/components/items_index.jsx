var React = require('react'),
    ItemIndexElement = require('./item_index_element.jsx'),
    ItemStore = require('../stores/item_store'),
    ItemActions = require('../actions/item_actions');

var ItemsIndex = React.createClass({
  getInitialState: function() {
    return {
      items: ItemStore.all()
    };
  },
  updateItems: function() {
    this.setState({items: ItemStore.all()})
  },
  componentDidMount: function() {
    this.listenerToken = ItemStore.addListener(this.updateItems);
    if (!this.props.fetchedBySearch) {
      ItemActions.fetchItems(this.props.params.store_id);
    }
  },
  componentWillUnmount: function() {
    this.listenerToken.remove();
  },
  render: function() {
    var content = this.state.items.map(function(item) {
      return <ItemIndexElement location={this.props.location} item={item} key={item.id} />;
    }.bind(this));
    if (content.length === 0 && this.props.fetchedBySearch) {
      content = <h3>No items matched this search.</h3>;
    }
    return (
      <div className='items-index'>
        {content}
      </div>
    );
  }

});

module.exports = ItemsIndex;
