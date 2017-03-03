var React = require('react');

var actions = require('../actions/index');
var SAMPLE_DATA = require('./sample-data');

var initialState = {
  userId: 0,
  listings: SAMPLE_DATA 
};

var reducer = function(state, action) {
  state = state || initialState;
  if(action.type === actions.RESET_STATE) {
    return initialState;
  }
  return state;
}

module.exports = reducer;
