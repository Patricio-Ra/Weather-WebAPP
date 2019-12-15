'use strict'

// Forecast GET request.
const getForecast = async address => {
    const response = await fetch(`http://127.0.0.1:3000/weather?address=${address}`, {});
    return await response.json();
};