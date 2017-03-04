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
    var status = null;

    fetch(url, {
      method: 'get',
      headers: headers
    })
    .then(function(response) {
      status = response.status;
      if (status !== 200) {
        throw error;
      }
      return response.json();
    })
    .then(function(response) {
      var listings = response.map(function(openHouse) {
        var listing = openHouse.listing;
        return   {
          stories: listing.property.stories,
          bedrooms: listing.property.bedrooms,
          bathsHalf: listing.property.bathsHalf,
          bathsFull: listing.property.bathsFull,
          mlsId: listing.mlsId,
          listDate: listing.listDate,
          listPrice: listing.listPrice,
          photos: listing.photos
        }

      });
      return dispatch(fetchOpenHousesSuccess(status, listings));
    })
    .catch(function(error) {
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