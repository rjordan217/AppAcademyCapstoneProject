var React = require('react'),
    SearchActions = require('../actions/search_actions'),
    StoresIndex = require('./stores_index'),
    SearchFilter = require('./search_filter'),
    ItemsIndex = require('./items_index');


var SearchIndex = React.createClass({
  getInitialState: function() {
    return {
      searchMode: "Show Stores",
      searchFilter: "No Filter"
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
    this.setState({searchMode: newMode});
  },

  switchFilter: function(newFilter) {
    this.setState({searchFilter: newFilter});
    alert("Search filters for favorites and taggings have not been implemented yet!");
  },

  render: function() {
    var content;

    switch (this.state.searchMode) {
      case "Show Stores":
        content = <StoresIndex fetchedBySearch={true} />;
        break;
      case "Show Items":
        content = <ItemsIndex fetchedBySearch={true} />;
        break;
    }

    return (
      <div className="search-index">
        <SearchFilter
          changeModeCB={this.switchMode}
          currentMode={this.state.searchMode}
          changeFilterCB={this.switchFilter}
          currentFilter={this.state.searchFilter} />
        <div className="with-sidebar">
          {content}
        </div>
      </div>
    );
  }

});

module.exports = SearchIndex;
