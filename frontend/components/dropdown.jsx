var React = require('react');

var Dropdown = React.createClass({
  getInitialState: function() {
    return {
      inFocus: this.props.receivedFocus
    };
  },

  componentWillReceiveProps: function(nextProps) {
    if (!nextProps.receivedFocus) {
      setTimeout(this.resetFocus, 500)
    } else {
      this.setInFocus();
    }
  },

  setInFocus: function() {
    this.setState({inFocus: true});
  },

  resetFocus: function() {
    this.setState({inFocus: false});
  },

  render: function() {
    if (this.props.visible || this.state.inFocus) {
      return (
        <div className="dropdown group" style={this.props.calcStyle}>
          {this.props.text}
        </div>
      );
    } else {
      return null;
    }
  }

});

module.exports = Dropdown;
