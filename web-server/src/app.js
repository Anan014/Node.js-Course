const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const request = require('postman-request');


const app = express();

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handelbars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Anan Amer'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Anan Amer'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text',
        title: 'Help',
        name: 'Anan Amer'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    };

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address,
            })
        })
    })

    // res.send({
    //     forecast: 'It is raining!',
    //     location: 'julis',
    //     address: req.query.address
    // })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Anan Amer',
        errorMessage: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Anan Amer',
        errorMessage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});

/*
Lecture 43, 15:42
Goal: Setup two new routes
1. Setup an about route and render a page title.
2. Setup a weather route and render a page title.
3. Test your work by visiting both in the browser

Lecture 45, 12:45
Goal: Create two more HTML files
1. Create a html page for about with "About" title.
2. Create a html page for help with "Help" title.
3. Remove the old route handlers for both.
4. Visit both in the browser to test your work.

Lecture 47, 17:00
Goal: Create a template for help page
1. Setup a help template to render a help message to the screen.
2. Setup the help soute and render the template with an example message.
3. Visit the route in the browser and see your help message print.

Lecture 49, 13:00
Goal: Create a partial for the footer
1. Setup the template for the footer partial "Created by Some Name".
2. Render the partial at the bottom of all three pages.
3. Test your work by visiting all three pages.

Lecture 50, 08:05
Goal: Create and render a 404 page with handlebars
1. Setup the template to render the header and footer.
2. Setup the template to render an error message in a paragraph
3. Render the template for both 404 routes
    - Page not found.
    - Help article not found.
4. Test your work. Visit /what and /help/units

Lecture 54, 12:30
Goal: Update weather endpoint to accept address
1. No address? Send back an error
2. Address? Send back the static JSON
    - add address property onto JSON which returns the peovided address
3. Test /weather and /weather?address=philadelphia

Lecture 55, 3:30
Goal: Wire up /weather
1. Require geocode/forecast into app.js
2. Use the address to geocode
3. Use the coordinates to get forecast
4. Send back the real forecast and location
*/