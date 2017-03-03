var React = require('react');

var RESET_STATE = 'RESET_STATE';
var resetState = function resetState() {
  return { 
    type: RESET_STATE 
  };
};

var fetchOpenHouses = function fetchOpenHouses() {
  return function(dispatch) {

    var url = 'https://api.simplyrets.com/openhouses';
    var headers = {
        'Authorization': 'Basic '+btoa('simplyrets:simplyrets'),
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    fetch(url, {
      method: 'get',
      headers: headers
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      var listings = response.map(function(openHouse) {
        return openHouse.listing;
      });
      console.log(listings);
    })
  }

};

exports.RESET_STATE = RESET_STATE;
exports.fetchOpenHouses = fetchOpenHouses;