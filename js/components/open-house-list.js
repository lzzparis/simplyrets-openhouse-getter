var React = require('react');

var actions = require('../actions/index');

var OpenHouse = require('./open-house');

var OpenHouseList = React.createClass({
  getInitialState: function() {
    return { hideErrorClass: 'hidden' };
  },
  componentWillMount: function() {
    this.props.dispatch(actions.fetchOpenHouses());
  },
  componentWillReceiveProps: function(nextProps) {
    console.log(nextProps);
    if(nextProps.fetchStatus !== 200) {
      this.setState({ hideErrorClass: '' });
    } else {
      this.setState({ hideErrorClass: 'hidden' });
    }

  },
  render: function() {
    var list = this.props.listings.map(function addListing(listing) {
      return <OpenHouse key={listing.mlsId} listing={listing} />;
    });
    return (
      <div className="open-house-list">
        <p className={"open-house-list-error" + this.state.hideErrorClass}>
          Failed to retrieve results :(
        </p>
        {list}
      </div>
    );
  }
});


module.exports = OpenHouseList;
