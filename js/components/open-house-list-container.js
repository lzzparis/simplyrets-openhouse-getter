var React = require('react');
var connect = require('react-redux').connect;

var OpenHouseList = require('./open-house-list');

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    listings: state.listings
  };
};

var OpenHouseListContainer = connect(mapStateToProps)(OpenHouseList);

module.exports = OpenHouseListContainer;