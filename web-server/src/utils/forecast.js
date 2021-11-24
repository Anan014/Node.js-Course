const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a4935a75d69b4692d6a7c956151b6561&query=' + latitude + ',' + longitude;

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the server!', undefined);
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degress out. It feels like ${body.current.feelslike} degress out.`)
        }
    })
}

module.exports = forecast;