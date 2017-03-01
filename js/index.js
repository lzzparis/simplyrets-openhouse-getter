var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var routes = require('./components/routes');

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(routes, document.getElementById('app'));
});
