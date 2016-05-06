var React = require('react'),
    CurrentUserStateMixin = require('../mixins/current_user_state'),
    FavoriteActions = require('../actions/favorite_actions'),
    Dropdown = require('./dropdown'),
    InProgressMixin = require('../mixins/in_progress');

// TODO: handle removing favorites

var FavoriteButton = React.createClass({
  mixins: [ CurrentUserStateMixin, InProgressMixin ],

  getInitialState: function() {
    return {
      isFavorited: false,
      hovered: false
    };
  },

  componentDidMount: function() {
    var favs = this.props.favorites;
    favs.forEach(function(fav) {
      if(fav.user_id === this.state.currentUser.id) {
        this.setState({isFavorited: true});
      }
    }.bind(this));
  },

  componentWillReceiveProps(nextProps) {
    var isFavorited = false;
    nextProps.favorites.forEach(function(fav) {
      if(fav.user_id === this.state.currentUser.id) {
        isFavorited = true;
      }
    }.bind(this));
    this.setState({isFavorited: isFavorited});
  },

  _favoriteObj: function(e) {
    e.stopPropagation();
    var obj = this.props.favoritable;
    this._disable();
    FavoriteActions.addFavorite(
      this.state.currentUser.id,
      obj.id,
      obj.type,
      this._reenable
    );
  },

  _unfavoriteObj: function(e) {
    e.stopPropagation();
    this._disable();
    var favIdx = -1;
    this.props.favorites.forEach(function(fav) {
      if (fav.user_id === this.state.currentUser.id) {
        favIdx = fav.id;
      }
    }.bind(this));
    if(favIdx !== -1) {
      FavoriteActions.removeFavorite(favIdx, this._reenable);
    }
  },

  _hovered: function() {
    this.setState({hovered: true});
  },

  _unhovered: function() {
    this.setState({hovered: false});
  },

  render: function() {
    var text, onClickAction, estilo, total;
    var calcStyle = {
      top: '30px',
      left: '-65px'
    };
    if(this.state.isFavorited) {
      text = <p className="fav-text" key={1}>Unfavorite {this.props.favoritable.type}</p>;
      onClickAction = this._unfavoriteObj;
      estilo = {color: 'red'};
    } else {
      text = <p className="fav-text" key={1}>Favorite {this.props.favoritable.type}</p>;
      onClickAction = this._favoriteObj;
      estilo = {color: 'white'};
    }
    total = <p className="fav-text" key={2}>Total favorites: {this.props.favorites.length}</p>;
    return (
      <div className="favorite-button droppable">
        <Dropdown text={[text, total]}
          visible={this.state.hovered}
          calcStyle={calcStyle}/>
        <button onClick={onClickAction}
          disabled={this.state.inProgress}
          style={estilo}
          onMouseEnter={this._hovered}
          onMouseLeave={this._unhovered}>
          {this.state.inProgress ? "..." : "❤"}
        </button>
      </div>
    );
  }

});

module.exports = FavoriteButton;
