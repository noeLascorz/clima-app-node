const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');



const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Descripción de la ciudad para obtener el clima',
        demand: true
    }
}).argv;




const getInfo = async(dir) => {
    try {
        const coordenadas = await lugar.getLugarLatLng(dir);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);
        return `El clima de ${coordenadas.direccion} es de ${temperatura}`;
    } catch (ex) {
        return `No se pudo recuperar la temperatura de ${dir}`;
    }

};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);