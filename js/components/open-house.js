var React = require('react');
var moment = require('moment'); 

var firebase = require("firebase/app");
require("firebase/database");

var config = {
  apiKey: "AIzaSyDfw6dgPvB7lRuCANYZVj-Bi67qmINZES4",
  authDomain: "simplyrets-openhouse-getter.firebaseapp.com",
  databaseURL: "https://simplyrets-openhouse-getter.firebaseio.com",
  storageBucket: "simplyrets-openhouse-getter.appspot.com",
  messagingSenderId: "410150604731"
};

firebase.initializeApp(config);

var OpenHouse = React.createClass({
  addToDatabase: function() {
    var database = firebase.database();
    var userId = window.localStorage.getItem('userId');  
    var mlsId = this.props.listing.mlsId; 

    database.ref('users/' + userId).push(mlsId, function(error) {
      if (error) {
        alert('Data could not be saved at this time');
      } else {
        console.log('mlsId ' + mlsId + ' saved successfully at users/' + userId);
      }
    });
  },
  render: function() {
    //Keep this business logic here because it's all formatting 
    //  (view-related)
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    });

    var backgroundImage = { 
      backgroundImage: 'url(\'' + this.props.listing.photos[0] + '\')' 
    };
    var prettyListDate = moment(this.props.listing.listDate).format('MM-DD-YYYY');
    var prettyPrice = formatter.format(this.props.listing.listPrice);

    return (
      <ul className="open-house">
        <div onClick={this.addToDatabase} className="open-house-image" style={backgroundImage}></div>
        <li className="open-house-detail open-house-price">{prettyPrice}</li>
        <li className="open-house-detail open-house-beds">Bedrooms: {this.props.listing.bedrooms}</li>
        <li className="open-house-detail open-house-full-bath">Full baths: {this.props.listing.bathsFull}</li>
        <li className="open-house-detail open-house-half-bath">Half baths: {this.props.listing.bathsHalf}</li>
        <li className="open-house-detail open-house-stories">Stories: {this.props.listing.stories}</li>
        <li className="open-house-detail open-house-mls-id">MLS ID: {this.props.listing.mlsId}</li>
        <li className="open-house-detail open-house-list-date">Listed: {prettyListDate}</li>
      </ul>
    );
  }
});

module.exports = OpenHouse;
