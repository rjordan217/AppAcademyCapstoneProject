var React = require('react'),
    CurrentUserStateMixin = require('../mixins/current_user_state'),
    FavoriteActions = require('../actions/favorite_actions'),
    InProgressMixin = require('../mixins/in_progress');

// TODO: handle removing favorites

var FavoriteButton = React.createClass({
  mixins: [ CurrentUserStateMixin, InProgressMixin ],

  getInitialState: function() {
    return {
      isFavorited: false
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

  render: function() {
    var text, onClickAction, estilo;
    if(this.state.isFavorited) {
      text = <p>Unfavorite {this.props.favoritable.type}</p>;
      onClickAction = this._unfavoriteObj;
      estilo = {color: 'red'};
    } else {
      text = <p>Favorite {this.props.favoritable.type}</p>;
      onClickAction = this._favoriteObj;
      estilo = {color: 'white'};
    }
    return (
      <div className="favorite-button">
        {text}
        <button onClick={onClickAction}
          disabled={this.state.inProgress}
          style={estilo}>
          {this.state.inProgress ? "..." : "❤"}
        </button>
      </div>
    );
  }

});

module.exports = FavoriteButton;
