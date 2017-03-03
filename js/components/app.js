var React = require('react');

var Banner = require('./banner');
var OpenHouseListContainer = require('./open-house-list-container');


var App = React.createClass({
  componentDidMount: function() {
    if (window.localStorage.getItem('userId') === null) {
      var userId = Math.floor(Math.random() * 1000000);
      window.localStorage.setItem('userId', userId);
    }
  },
  render: function() {
    return (
      <div className="app">
        <Banner />
        <OpenHouseListContainer />
      </div>
    );
  }
});


module.exports = App;
