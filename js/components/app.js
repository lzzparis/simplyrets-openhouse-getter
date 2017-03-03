var React = require('react');

var Banner = require('./banner');
var OpenHouseListContainer = require('./open-house-list-container');

var App = function App(props) {
  return (
    <div className="app">
      <Banner />
      <OpenHouseListContainer />
    </div>
  );
};


module.exports = App;
