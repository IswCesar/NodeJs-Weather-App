const place = require("./place/place");
const weather = require("./weather/weather");

const argv = require("yargs").options({
    direcction: {
        alias: "d",
        desc: "City info weather",
        demand: true,
    },
}).argv;

// place.getPlaceLatLng(argv.direcction).then(console.log);
// weather.getWeather(-3.69194, 40.41889).then(console.log).catch(console.log);

const getInfo = async(direction) => {
    try {
        const coords = await place.getPlaceLatLng(argv.direcction);
        const temp = await weather.getWeather(coords.lat, coords.lng);
        return `el clima de ${coords.direction} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direction}`;
    }
};

getInfo(argv.direcction).then(console.log).catch(console.log);