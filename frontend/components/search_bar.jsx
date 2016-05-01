var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    HashHistory = require('react-router').hashHistory;

var SearchBar = React.createClass({

  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {
      searchParams: "Search Petsy...",
      inProgress: false
    };
  },

  _reenable: function() {
    this.setState({inProgress: false});
  },

  _submitSearch: function() {
    this.setState({inProgress: true});
    setTimeout(this._reenable, 1000);
    HashHistory.push("/search/" + encodeURIComponent(this.state.searchParams));
  },

  _setEmpty: function() {
    if (this.state.searchParams === "Search Petsy...") {
      this.setState({searchParams: ""});
    }
  },

  render: function() {
    return (
      <div className="search-bar">
        <input type="search"
          valueLink={this.linkState("searchParams")}
          onClick={this._setEmpty} />
        <button
          onClick={this._submitSearch}
          disabled={this.state.inProgress}
          >{this.state.inProgress ? "Searching..." : "Search"}
        </button>
      </div>
    );
  }

});

module.exports = SearchBar;
