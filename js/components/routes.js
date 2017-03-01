var React = require('react');
var ReactDOM = require('react-dom');

var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;


var App = require('./app');
var OpenHouseListContainer = require('./open-house-list-container');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App} >
      <IndexRoute component={OpenHouseListContainer} />
    </Route>
  </Router>
);

module.exports = routes;
