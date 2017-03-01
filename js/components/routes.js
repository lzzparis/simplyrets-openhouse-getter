var React = require("react");
var ReactDOM = require("react-dom");

var router = require("react-router");
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;


var App = require("./app");

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App} />
  </Router>
);

module.exports = routes;
