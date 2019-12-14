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

// Gets endpoints.
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

app.get('/weather', (req, res) => {
    res.send({
        location: 'Buenos Aires',
        forecast: 'Its 25° outside.'
    });
});

// Listen fn.
app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});