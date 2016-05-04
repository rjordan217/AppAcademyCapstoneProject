var React = require('react'),
    FILTERS = require('../constants/search_filter_constants').FILTERS,
    MODES = require('../constants/search_filter_constants').MODES;

// Need to pass in callback to switch searchIndex items
// onClick={this.props.switchCB.bind(filter)}

var SearchFilter = React.createClass({

  render: function() {

    var selectedStyle = {fontWeight: 'bold'};

    return (
      <div className="search-filter">
        <ul className="search-mode-list">
          {MODES.map(function(mode, idx) {
            return (
              <li
                style={this.props.currentMode === mode ? selectedStyle : null}
                key={idx}
                onClick={function(e) {
                  e.preventDefault();
                  this.props.changeModeCB(mode);
                }.bind(this)}>
                {mode}
              </li>
            );
          }.bind(this))}
        </ul>
        <ul className="search-filter-list">
          {FILTERS.map(function(filter, idx) {
            return (
              <li
                style={this.props.currentFilter === filter ? selectedStyle : null}
                key={idx}
                onClick={function(e) {
                  e.preventDefault();
                  this.props.changeFilterCB(filter);
                }.bind(this)}>
                {filter}
              </li>
            );
          }.bind(this))}
        </ul>
      </div>
    );
  }

});

module.exports = SearchFilter;
