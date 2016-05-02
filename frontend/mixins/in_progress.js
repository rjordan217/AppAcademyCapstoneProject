var InProgressMixin = {
  getInitialState: function() {
    return {
      inProgress: false
    };
  },
  _disable: function() {
    this.setState({inProgress: true})
  },
  _reenable: function() {
    this.setState({inProgress: false});
  }
};

module.exports = InProgressMixin;
