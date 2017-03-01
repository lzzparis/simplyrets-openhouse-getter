var React = require("react");

var OpenHouse = function OpenHouse(props) {
  return (
    <ul className="open-house">
      <li>stories: {props.listing.stories}</li>
      <li>bedrooms: {props.listing.bedrooms}</li>
      <li>bathsFull: {props.listing.bathsFull}</li>
      <li>bathsHalf: {props.listing.bathsHalf}</li>
      <li>mlsId: {props.listing.mlsId}</li>
      {// <li>listDate: {props.listing.listDate}</li>
      }
      <li>listPrice: {props.listing.listPrice}</li>
      <li>photos: {props.listing.photos[0]}</li>
    </ul>
  );
};

module.exports = OpenHouse;
