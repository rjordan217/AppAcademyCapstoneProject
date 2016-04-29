var Main = require('./components/main'),
    React = require('react'),
    ReactDOM = require('react-dom');

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <Main />,
    document.getElementById('content')
  );
});
