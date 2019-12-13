const path = require('path');
const express = require('express');

const app = express();
const publicDir = path.join(__dirname, '../public');

app.set('view engine', 'hbs');

app.use(express.static(publicDir));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Patricio'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Patricio'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'Select the location to get the forecast.'
    });
});

app.get('/weather', (req, res) => {
    res.send({
        location: 'Buenos Aires',
        forecast: 'Its 25° outside.'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});