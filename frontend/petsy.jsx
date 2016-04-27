var LoginForm = require('./components/login_form'),
    React = require('react'),
    ReactDOM = require('react-dom');

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <LoginForm />,
    document.getElementById('content')
  );
});
