var React = require('react');

var OpenHouse = require('./open-house');

var OpenHouseList = React.createClass({
  render: function() {
    var list = this.props.listings.map(function addListing(listing) {
      return <OpenHouse key={listing.mlsId} listing={listing} />;
    });
    return (
      <div className="open-house-list">
        {list}
      </div>
    );
  }
});


module.exports = OpenHouseList;
