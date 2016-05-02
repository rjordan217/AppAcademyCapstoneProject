var React = require('react'),
    FILTERS = require('../constants/search_filter_constants').FILTERS;

var SearchFilter = React.createClass({

  render: function() {
    return (
      <ul className="search-filter">
        {FILTERS.forEach(function(filter) {
          if (this.state.selectedFilter === filter) {
            
          }
          return <li onClick={this.props.switchCB.bind(filter)}>{filter}</li>;
        })}
      </ul>
    );
  }

});

module.exports = SearchFilter;
