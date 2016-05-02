var React = require('react'),
    SearchActions = require('../actions/search_actions'),
    StoresIndex = require('./stores_index'),
    ItemsIndex = require('./items_index');

    // <SearchFilter currentMode={this.state.searchMode}
    //   currentFilter={this.state.searchFilter}
    //   switchMode={this.switchMode}
    //   switchFilter={this.switchFilter} />


var SearchIndex = React.createClass({
  getInitialState: function() {
    return {
      searchMode: "by store",
      searchFilter: "most favorited"
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
//TODO: Pass in filter to search params
  switchFilter: function(newFilter) {
    this.setState({searchFilter: newFilter})
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
        {content}
      </div>
    );
  }

});

module.exports = SearchIndex;
