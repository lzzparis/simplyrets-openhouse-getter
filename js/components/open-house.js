var React = require('react');
var moment = require('moment'); 

var OpenHouse = function OpenHouse(props) {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });

  var backgroundImage = { 
    backgroundImage: 'url(\'' + props.listing.photos[0] + '\')' 
  };
  var prettyListDate = moment(props.listing.listDate).format('MM-DD-YYYY');
  var prettyPrice = formatter.format(props.listing.listPrice);

  return (
    <ul className="open-house">
      <div className="open-house-image" style={backgroundImage}></div>
      <li className="open-house-detail open-house-price">{prettyPrice}</li>
      <li className="open-house-detail open-house-beds">Bedrooms: {props.listing.property.bedrooms}</li>
      <li className="open-house-detail open-house-full-bath">Full baths: {props.listing.property.bathsFull}</li>
      <li className="open-house-detail open-house-half-bath">Half baths: {props.listing.property.bathsHalf}</li>
      <li className="open-house-detail open-house-stories">Stories: {props.listing.property.stories}</li>
      <li className="open-house-detail open-house-mls-id">MLS ID: {props.listing.mlsId}</li>
      <li className="open-house-detail open-house-list-date">Listed: {prettyListDate}</li>
    </ul>
  );
};

module.exports = OpenHouse;
