const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/1073ee6ba829751da651e5f32b339f88/${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}?units=ca`;
    request({ url, json: true }, (error, { body } = { }) => {
        if (error) {
            callback(`Error: Unable to connect to weather service. ${error.message}.`);
        } else if (body.error) {
            callback('Unable to find location. Please try again.');
        } else {
            const { temperature, precipProbability } = body.currently;
            const { temperatureLow, temperatureHigh, summary} = body.daily.data[0];
            callback(undefined, `${summary} Today has a min temp of ${temperatureLow}° and a max temp of ${temperatureHigh}° It's currently ${temperature}° out. There is ${precipProbability * 100}% chance of rain.`);
        };
    });
};

module.exports = forecast;