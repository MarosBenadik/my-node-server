const Trafic = require('./models/trafick');
const geoip = require('ip-to-location');

const getLocation = async (location) => {
    geoip.fetch(location, async function(err, res){
        if (res.status == false) {

        } else {
            const trafic = await Trafic.create({
                ip: res.ip,
                country_code: res.country_code,
                country_name: res.country_name,
                latitude: res.latitude,
                longitude: res.longitude,
            });
            trafic.save();
        }
    })
}

module.exports = {
    getLocation
};