var React = require('react'),
    UserActions = require('../actions/user_actions'),
    HashHistory = require('react-router').hashHistory,
    Dropdown = require('./dropdown');

var ProfThumbnail = React.createClass({

  getInitialState: function() {
    return {
      hovered: false
    };
  },

  _hover: function() {
    this.setState({hovered: true});
  },

  _unhover: function() {
    this.setState({hovered: false});
  },

  deleteAccount: function(e) {
    e.preventDefault();
    UserActions.destroy(function() { HashHistory.push('/'); });
  },

  render: function() {
    var profPicPOJO = {
      backgroundImage: "url('" + this.props.userProf.profile_pic_url + "')",
      backgroundSize: '50px 50px'
    };
    var forDropdown = (
      <ul className="profile-dropdown">
        <li className="profile-dd-item">Hello, {this.props.userProf.username}</li>
        <li className="profile-dd-item"
          onClick={this.deleteAccount}>Delete Account</li>
      </ul>
    );
    var calcStyle = {
      top: '48px',
      left: '-55px'
    };
    return (
      <div className="prof-thumbnail droppable"
        style={profPicPOJO}
        onMouseEnter={this._hover}
        onMouseLeave={this._unhover}>
        <Dropdown text={forDropdown}
          receivedFocus={this.state.hovered}
          visible={this.state.hovered}
          calcStyle={calcStyle}/>
      </div>
    );
  }

});

module.exports = ProfThumbnail;
