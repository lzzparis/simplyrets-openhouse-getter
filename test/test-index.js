var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var shallow = require('enzyme').shallow;
var should = require('chai').should();

var testDispatch = function testDispatch() {
  return;
}
var SAMPLE_DATA = require('./sample-data');

// Test components render
var Banner = require('../js/components/banner');
var BannerInstance = shallow(<Banner />);
describe('Banner component', function() {
  it('should render', function() {
    BannerInstance.should.have.length(1);
  });
});

var OpenHouse = require('../js/components/open-house');
var OpenHouseInstance = shallow(<OpenHouse listing={SAMPLE_DATA[0]} />);
describe('OpenHouse component', function() {
  it('should render', function() {
    OpenHouseInstance.should.have.length(1);
  });
});

var OpenHouseList = require('../js/components/open-house-list');
var OpenHouseListInstance = shallow(<OpenHouseList listings={SAMPLE_DATA} dispatch={testDispatch}/>);
describe('OpenHouseList component', function() {
  it('should render', function() {
    OpenHouseListInstance.should.have.length(1);
  });

  it('should instantiate OpenHouseLists based on listings prop', function() {
    var children = OpenHouseListInstance.node.props.children;
    //error parapraph
    children[0].type.should.equal('p');

    //OpenHouse instances
    children[1].forEach(function(child, i) {
      child.type.displayName.should.equal('OpenHouse');
      child.props.listing.should.equal(SAMPLE_DATA[i]);
    });

  });

});

var App = require('../js/components/app');
var AppInstance = shallow(<App />);
describe('App component', function() {
  it('should render', function() {
    AppInstance.should.have.length(1);
  });

  it('should instantiate Banner', function() {
    var child = AppInstance.node.props.children[0];
    child.type.should.equal(Banner);
  });

  it('should instantiate connected OpenHouseList', function() {
    var child = AppInstance.node.props.children[1];
    child.type.WrappedComponent.displayName.should.equal('OpenHouseList');
  });

})

// Test actions/reducers
var actions = require('../js/actions/index');
var reducer = require('../js/reducers/index');

var checkState = function checkState(actual, expected) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  return actual.should.equal(expected);
}

describe('Reducer', function() {
  it('should handle RESET_STATE', function() {
    //set some state
    var actualState = {listings: SAMPLE_DATA, fetchStatus: 200};
    //clear state
    actualState = reducer.reducer(actualState, actions.resetState());
    var expectedState = {listings: [], fetchStatus: null};

    checkState(actualState, expectedState);
  });

  it('should handle FETCH_OPEN_HOUSES_SUCCESS', function() {
    var initialState = reducer.initialState;
    var actualState = reducer.reducer(initialState, actions.fetchOpenHousesSuccess(200, SAMPLE_DATA));
    var expectedState = {listings: SAMPLE_DATA, fetchStatus: 200};

    checkState(actualState, expectedState);
  });

  it('should handle FETCH_OPEN_HOUSES_ERROR', function() {
    var initialState = reducer.initialState;
    var actualState = reducer.reducer(initialState, actions.fetchOpenHousesError(400));
    var expectedState = {listings: [], fetchStatus: 400};

    checkState(actualState, expectedState);
  })

});