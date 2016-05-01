var NavBar = require('./components/nav_bar'),
    Main = require('./components/main'),
    StoresIndex = require('./components/stores_index'),
    StoreDetail = require('./components/store_detail'),
    ItemsIndex = require('./components/items_index'),
    ItemDetail = require('./components/item_detail'),
    SearchIndex = require('./components/search_index'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    HashHistory = require('react-router').hashHistory,
    React = require('react'),
    ReactDOM = require('react-dom');


var App = React.createClass({

  render: function() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }

});

var routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Main} />
    <Route path='stores/:store_id' component={StoreDetail}>
      <IndexRoute component={ItemsIndex} />
      <Route path='items/:item_id' component={ItemDetail} />
    </Route>
    <Route path='search/:encoded_search_params' component={SearchIndex} />
  </Route>
);


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <Router history={HashHistory}>
      {routes}
    </Router>,
    document.getElementById('content')
  );
});
