var React = require('react'),
    SearchActions = require('../actions/search_actions'),
    StoresIndex = require('./stores_index'),
    ItemsIndex = require('./items_index');
// <SearchFilters switchModeCallback={this.switchMode} />
var SearchIndex = React.createClass({
  getInitialState: function() {
    return {
      searchMode: "by store"
    };
  },

  componentDidMount: function() {
    var normalizedParams = decodeURIComponent(this.props.params.encoded_search_params);
    SearchActions.primarySearch(normalizedParams);
  },

  componentWillReceiveProps(nextProps) {
    SearchActions.primarySearch(nextProps.params.encoded_search_params);
  },

  switchMode: function(newMode) {
    this.setState({searchMode: newMode})
  },

  render: function() {
    var content;
    if (this.state.searchMode === "by store") {
      content = <StoresIndex fetchedBySearch={true} />;
    } else {
      content = <ItemsIndex fetchedBySearch={true} />;
    }

    return (
      <div className="search-index">
        <SearchFilter currentFilter={this.state.searchMode}
          switchCB={this.switchMode} />
        {content}
      </div>
    );
  }

});

module.exports = SearchIndex;
