const request = require('postman-request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

/*
Lec32,08:08
Challenge: Print a small forecst to the user
1. Print: "It is currently {temperature} degress out. It feels like {temperature} degress out"
2. Test your work.

Lec33,13:04
Goal: Print the lat/long for Los Angeles
1. Fire off a new request to the URL explored in browser
2. Have the request module parse it as JSON
3. Print both the latitude and longitude to the termenal.
4. Test your work

Goal: Create a reusable function for getting the forcast
1. Setup the "forcasat" function in utils/forcast.js
2. Require the function in app.js and call it as shown below.
3. The forecast finction should have three potential calls to callback:
    - Low level error, pass string for error.
    - Coordinate error, pass string for error.
    - Success, pass forcast string for data (same format as from before)

Lecture38, 08:14
Goal: Accept location via command line argument.
1. Access the command line argument without yargs.
2. Use the string value as the input for grocode.
3. Only geocode if a location was provided
4. Test your work with a couple locations.

Lecture 40, 01:00
Goal: Use both destructuring and property shorthand in weather app
1. Use destructuring in app.js, forecast.js and geocode.js
2. Use property shorthand in forecast.js and geocode.js
3. Test your work and ensure app still works
*/

if (process.argv[2]) {
    geocode(process.argv[2], (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return console.log('error', error);
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                console.log('Error', error);
            }
            console.log(location);
            console.log(forecastData);
        })
    });
} else if (!process.argv[2]) {
    console.log("type a location")
}