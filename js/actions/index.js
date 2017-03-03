var React = require('react');

var RESET_STATE = 'RESET_STATE';
var resetState = function resetState() {
  return { 
    type: RESET_STATE 
  };
};

var FETCH_OPEN_HOUSES_SUCCESS = 'FETCH_OPEN_HOUSES_SUCCESS';
var fetchOpenHousesSuccess = function fetchOpenHousesSuccess(status, listings) {
  return {
    type: FETCH_OPEN_HOUSES_SUCCESS,
    status: status,
    listings: listings
  };
};

var FETCH_OPEN_HOUSES_ERROR = 'FETCH_OPEN_HOUSES_ERROR';
var fetchOpenHousesError = function fetchOpenHousesError(status) {
  return {
    type: FETCH_OPEN_HOUSES_ERROR,
    status: status
  };
};

var fetchOpenHouses = function fetchOpenHouses() {
  return function(dispatch) {
    var url = 'https://api.simplyrets.com/openhouses';
    var headers = {
        'Authorization': 'Basic ' + btoa('simplyrets:simplyrets')
    };

    fetch(url, {
      method: 'get',
      headers: headers
    })
    .then(function(response) {
      if (response.status !== 200) {
        throw response.status;
      }
      return response.json();
    })
    .then(function(response) {
      var listings = response.map(function(openHouse) {
        return openHouse.listing;
      })
      return dispatch(fetchOpenHousesSuccess(response.status, listings));
    })
    .catch(function(status) {
      return dispatch(fetchOpenHousesError(status));
    });

  };
};

exports.RESET_STATE = RESET_STATE;
exports.resetState = resetState;
exports.fetchOpenHouses = fetchOpenHouses;
exports.fetchOpenHousesSuccess = fetchOpenHousesSuccess;
exports.FETCH_OPEN_HOUSES_SUCCESS = FETCH_OPEN_HOUSES_SUCCESS;
exports.fetchOpenHousesError = fetchOpenHousesError;
exports.FETCH_OPEN_HOUSES_ERROR = FETCH_OPEN_HOUSES_ERROR;