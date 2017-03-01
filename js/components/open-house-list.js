var React = require('react');

var OpenHouse = require('./open-house');

var OpenHouseList = function OpenHouseList(props) {
  var list = [];
  props.listings.forEach(function addListing(listing, i) {
    // console.log(listing);
    list.push(<OpenHouse key={i} listing={listing} />);
  });
  return (
    <div className="open-house-list">
      {list}
    </div>
  );
};


module.exports = OpenHouseList;
