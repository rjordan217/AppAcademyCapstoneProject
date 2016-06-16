var React = require('react'),
    InProgressMixin = require('../mixins/in_progress'),
    SellerActions = require('../actions/seller_actions'),
    ItemActions = require('../actions/item_actions'),
    HashHistory = require('react-router').hashHistory;

var SearchBar = React.createClass({

  mixins: [InProgressMixin],

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

  _updateSearchParams: function(e) {
    this.setState({searchParams: e.target.value});
  },

  render: function() {
    return (
      <div className="search-bar">
        <input type="search"
          value={this.state.searchParams}
          onChange={this._updateSearchParams}
          onClick={this._setEmpty}
          onKeyDown={this._submitIfEnter} />
        <button
          onClick={this._submitSearch}
          disabled={this.state.inProgress}
          onKeyDown={this._submitIfEnter}
          ></button>
      </div>
    );
  }

});

module.exports = SearchBar;
