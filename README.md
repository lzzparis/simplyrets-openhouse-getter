# SimplyRETS OpenHouse Getter

This application uses the SimplyRETS API to pull data for real estate open houses. It was built primarily with React, Redux, Less and Firebase.

## Getting Started

#### Prerequisites

This project is built and run using NPM.  Install [node](http://nodejs.org/) and [npm](https://npmjs.org/), then install dependencies using:

```
npm install
```

#### Build
To build and run this project:

```
npm run build ; npm run start
```

## Methodology
On page load the following happens:

1. The top-level App checks whether there is a userId stored in the browser's localStorage.  If not, it generates a random 8-digit integer and stores it there. 
2. The OpenHouseList component dispatches a fetch action that performs the following GET request:
    * URI: https://api.simplyrets.com/openhouses
    * URI:
    * Credentials (from API for pulling test data)
        * Username: simplyrets
        * Password: simplyrets
3. When this data returns,
    * On success (200): save response status and relevant data to the store:
        ```
        listing: {
          property: {
            stories,
            bedrooms,
            bathsHalf,
            bathsFull
          },
          mlsId,
          listDate,
          listPrice,
          photos
        }
        ```
    * On error (all other): save response status to the store
4. OpenHouseList rerenders based on updated store data, instantiating OpenHouse components if possible

This app is connected to the Firebase database: https://simplyrets-openhouse-getter.firebaseio.com . This is currently setup for public reads and writes (no authentication required - see TODO section)

Upon clicking an OpenHouse component:

1. The mlsId is pushed to the database, storing the data at users/<userId\>
2. When the database sends the completion, feedback is printed to the console (i.e. "mlsId 1005205 saved successfully at users/21546")

The resetState action is available for future use.

## Test suite

Unit tests are included to validate component rendering and action/reducer funtionality.

To run the test suite:

```
npm run test
```

## TODO

The following should be completed as time permits.

#### Issues:

- Secure Firebase database to only accept writes from authorized users.  Consider using Firebase auth to authenticate user again their userId and only allow them to right to that location (users/<userId>)

#### Enhancements:

- Allow user to request data for a specific region using the "cities" request parameter.
    - Since this only takes in a city name string, I would probably use the Google Maps API geolocation functionality to translate zip codes, etc into valid "cities" string.
- Allow user to sort results based on open house startDate, listPrice, listDate.
    - The easiest way to implement this this may be to store the API data to Firebase, then include sort or filter parameter as part of the database query.
    - However, the latency of pulling from the database on every sort or filter may be prohibitive for this method.
- Allow user to filter results based on number of bedrooms, bathrooms, stories.
    - See above.

## Special thanks
React project starter by Joe Turner (https://github.com/oampo/thinkful-react-starter).  Starter includes directory structure, index.html template, and package.json with some build scripts.  The rest is my own (https://github.com/lzzparis)

