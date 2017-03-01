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
    <ul className='open-house'>
      <img src={props.listing.photos[0]} />
      <li>{prettyPrice}</li>
      <li>Bedrooms: {props.listing.bedrooms}</li>
      <li>Full baths: {props.listing.bathsFull}</li>
      <li>Half baths: {props.listing.bathsHalf}</li>
      <li>Stories: {props.listing.stories}</li>
      <li>MLS ID: {props.listing.mlsId}</li>
      <li>Listed: {prettyListDate}</li>
    </ul>
  );
};

module.exports = OpenHouse;
