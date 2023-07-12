
function direta() {

    dat = {
        ipVersion: 4,
        ipAddress: '192.168.86.64',
        latitude: -6.775,
        longitude: -39.98917,
        countryName: 'Global',
        countryCode: 'BR',
        timeZone: '-03:00',
        zipCode: '63140-000',
        cityName: 'Tamananguapio',
        regionName: 'Caribe',
        continent: 'Americas',
        continentCode: 'AM'
      }
    
    
    const cor = require('./perso.js')
    const teste = require('./teste.js')

    const info = `${cor.iazul}${dat.ipAddress}${cor.fazul}\nLINHA 2`
    console.log(info); // Texto verde
    return info
}

module.exports = direta()