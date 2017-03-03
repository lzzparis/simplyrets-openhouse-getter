var React = require('react');

var actions = require('../actions/index');

var initialState = {
  userId: 0,
  listings: [],
  fetchStatus: null
};

var reducer = function(state, action) {
  state = state || initialState;
  if (action.type === actions.RESET_STATE) {
    return initialState;
  } else if (action.type === actions.FETCH_OPEN_HOUSES_SUCCESS) {
    console.log(action);
    return Object.assign({}, state, {listings: action.listings}, {fetchStatus: action.status});
  } else if (action.type === actions.FETCH_OPEN_HOUSES_ERROR) {
    return Object.assign({}, state, {fetchStatus: action.status});
  }

  return state;
};

exports.reducer = reducer;
exports.initialState = initialState;
