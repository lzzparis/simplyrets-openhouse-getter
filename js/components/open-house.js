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
      <div className="open-house">
        <div onClick={this.addToDatabase} className="open-house-image" style={backgroundImage}></div>
        <p className="open-house-price">{prettyPrice}</p>
        <table className="open-house-details">
          <tbody>
          <tr>
            <td className="open-house-detail-label"> Bedrooms: </td>
            <td className="open-house-detail-data">{this.props.listing.bedrooms}</td>
          </tr>
          <tr>
            <td className="open-house-detail-label"> Full baths: </td>
            <td className="open-house-detail-data">{this.props.listing.bathsFull}</td>
          </tr>
          <tr>
            <td className="open-house-detail-label"> Half baths: </td>
            <td className="open-house-detail-data">{this.props.listing.bathsHalf}</td>
          </tr>
          <tr>
            <td className="open-house-detail-label"> Stories: </td>
            <td className="open-house-detail-data">{this.props.listing.stories}</td>
          </tr>
          <tr>
            <td className="open-house-detail-label"> MLS ID: </td>
            <td className="open-house-detail-data">{this.props.listing.mlsId}</td>
          </tr>
          <tr>
            <td className="open-house-detail-label"> Listed: </td>
            <td className="open-house-detail-data">{prettyListDate}</td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = OpenHouse;
