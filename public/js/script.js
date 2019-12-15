'use strict'

const weatherForm = document.querySelector('form');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');

weatherForm.addEventListener('submit', async e => {
    e.preventDefault();
    p1.textContent = 'Loading...';
    p2.textContent = '';
    const forecast = await getForecast(e.target.elements.address.value);
    if (forecast.error) {
        p1.textContent = 'Error:';
        p2.textContent = forecast.error;
    } else {
        p1.textContent = forecast.location;
        p2.textContent = forecast.forecast;
    };
});

