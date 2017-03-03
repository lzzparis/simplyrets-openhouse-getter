var React = require('react');

var actions = require('../actions/index');
var SAMPLE_DATA = require('./sample-data');

var initialState = {
  userId: 0,
  listings: [] 
};

var reducer = function(state, action) {
  state = state || initialState;
  if (action.type === actions.RESET_STATE) {
    return initialState;
  } else if (action.type === actions.FETCH_OPEN_HOUSES_SUCCESS) {
    return Object.assign({}, state, {listings: action.listings});
  }

  return state;
};

module.exports = reducer;
