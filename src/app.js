const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();


// Settings defined for Express config.
const settings = {
    viewEngine: 'hbs',
    publicDir: path.join(__dirname, '../public'),
    viewsDir: path.join(__dirname, '../templates/views'),
    partialsDir: path.join(__dirname, '../templates/partials')
};

// Handlebars engine.
app.set('view engine', settings.viewEngine);
app.set('views', settings.viewsDir);
hbs.registerPartials(settings.partialsDir);
// Static directory.
app.use(express.static(settings.publicDir));


// Gets assets endpoints.
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Patricio Raschetti'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Patricio Raschetti'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Patricio Raschetti',
        helpText: 'Select the location to get the forecast.'
    });
});

// Gets APIs endpoints.
app.get('/weather', (req, res) => {
    if (!req.query.address || req.query.address.trim() === ''){
        return res.send({
            error: 'No address provided.'
        });
    };
    res.send({
        address: req.query.address,
        location: 'Buenos Aires',
        forecast: 'Its 25° outside.'
    });
});


// 404 routes.
app.get('/help/*', (req, res) => {
    res.status(404).render('404', {
        title: 'Not found',
        name: 'Patricio Raschetti',
        errorMessage: 'Help article not found!'
    });
});

app.get('*', (req, res) => {
    res.status(404).render('404', {
        title: 'Not found',
        name: 'Patricio Raschetti',
        errorMessage: 'Page not found!'
    });
});


// Listen fn.
app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});