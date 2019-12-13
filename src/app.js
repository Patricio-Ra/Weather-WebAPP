const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1 style="text-align: center">Hello express!</h1>');
});

app.get('/help', (req, res) => {
    res.send({ 
        name: 'Patricio',
        age: 31,
        location: 'Buenos Aires, Argentina'
    });
});

app.get('/about', (req, res) => {
    res.send('<h1 style="text-align: center">About page.</h1>');
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