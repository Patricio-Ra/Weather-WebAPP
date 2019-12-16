'use strict'

// Forecast GET request.
const getForecast = async address => {
    const response = await fetch(`/weather?address=${address}`, {});
    return await response.json();
};