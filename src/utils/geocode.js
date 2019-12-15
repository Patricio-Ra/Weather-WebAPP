const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?limit=1&access_token=pk.eyJ1IjoicHIyMCIsImEiOiJjazQxb2ltcG8wM2FmM2tvYnp3NnJ3a2pvIn0.stPzyBxtXHSkK749kXzlSQ`;
    request({ url, json: true }, (error, { body } = { }) => {
        if (error) {
            callback(`Unable to connect location services. ${error.message}.`, {});
        } else if (body.message || body.features.length === 0) {
            callback('Unable to find geolocation. Try another search.', {});
        } else {
            const { center, place_name } = body.features[0];
            callback(undefined, {
                latitude: center[1],
                longitude: center[0],
                location: place_name
            });
        };
    });
};

module.exports = geocode;