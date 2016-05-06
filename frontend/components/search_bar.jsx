var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    InProgressMixin = require('../mixins/in_progress'),
    SellerActions = require('../actions/seller_actions'),
    ItemActions = require('../actions/item_actions'),
    HashHistory = require('react-router').hashHistory;

var SearchBar = React.createClass({

  mixins: [LinkedStateMixin, InProgressMixin],

  getInitialState: function() {
    return { searchParams: "Search Petsy..." };
  },

  _submitSearch: function() {
    this._disable();
    setTimeout(this._reenable, 500);
    SellerActions.resetSellers();
    ItemActions.resetItems();
    HashHistory.push("/search/" + encodeURIComponent(this.state.searchParams));
  },

  _setEmpty: function() {
    if (this.state.searchParams === "Search Petsy...") {
      this.setState({searchParams: ""});
    }
  },

  _submitIfEnter: function(e) {
    if (e.keyCode === 13) {
      this._submitSearch();
    }
  },

  render: function() {
    return (
      <div className="search-bar">
        <input type="search"
          valueLink={this.linkState("searchParams")}
          onClick={this._setEmpty}
          onKeyDown={this._submitIfEnter} />
        <button
          onClick={this._submitSearch}
          disabled={this.state.inProgress}
          onKeyDown={this._submitIfEnter}
          >{this.state.inProgress ? "Searching..." : "Search"}
        </button>
      </div>
    );
  }

});

module.exports = SearchBar;
