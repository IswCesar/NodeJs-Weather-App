const axios = require("axios");

const getPlaceLatLng = async(place) => {
    const encodedURI = encodeURI(place);
    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedURI}.json`,
        params: {
            access_token: "pk.eyJ1IjoiY2FyZG9uYS1jZXNhciIsImEiOiJja2c4dWo5MGMwa3kyMzBwZzI0NTNmbWxvIn0.PRZj7eDBQkQryn9dVN-e5g",
        },
    });

    const result = await instance.get();

    if (result.data.features.length === 0) {
        throw new Error(`No hay resultados para  ${direction}`);
    }

    const data = result.data.features[0];
    const direction = data.place_name;
    const lat = data.center[0];
    const lng = data.center[1];

    return {
        direction,
        lat,
        lng,
    };
};

module.exports = {
    getPlaceLatLng,
};