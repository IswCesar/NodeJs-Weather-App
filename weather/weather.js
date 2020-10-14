const axios = require("axios");
const keys = require("./../config/keys");

const appid = keys.apiKey;

const getWeather = async(lat, lng) => {
    const result = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${appid}&units=metric`
    );

    return result.data.main.temp;
};

module.exports = {
    getWeather,
};