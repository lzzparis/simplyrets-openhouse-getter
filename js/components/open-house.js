var React = require('react');
var moment = require('moment'); 

var OpenHouse = function OpenHouse(props) {
  var prettyListDate = moment(props.listing.listDate).format('MM-DD-YYYY');
  
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });
  var prettyPrice = formatter.format(props.listing.listPrice);

  return (
    <ul className="open-house">
      <img src={props.listing.photos[0]} />
      <li className="open-house-detail open-house-price">{prettyPrice}</li>
      <li className="open-house-detail open-house-beds">Bedrooms: {props.listing.bedrooms}</li>
      <li className="open-house-detail open-house-full-bath">Full baths: {props.listing.bathsFull}</li>
      <li className="open-house-detail open-house-half-bath">Half baths: {props.listing.bathsHalf}</li>
      <li className="open-house-detail open-house-stories">Stories: {props.listing.stories}</li>
      <li className="open-house-detail open-house-mls-id">MLS ID: {props.listing.mlsId}</li>
      <li className="open-house-detail open-house-list-date">Listed: {prettyListDate}</li>
    </ul>
  );
};

module.exports = OpenHouse;
