import initMap from './leaflet';

const displayIP = document.querySelector('#ip-data');
const displayLocation = document.querySelector('#location-data');
const displayTimezone = document.querySelector('#timezone-data');
const displayISP = document.querySelector('#isp-data');

class IpInfo {
    constructor(address, city, latitude, longitude, timezone, isp) {
        this.address = address;
        this.city = city;
        this.latitude = Math.round(100 * latitude) / 100;
        this.longitude = Math.round(100 * longitude) / 100;
        this.timezone = timezone;
        this.isp = isp;
    }
}

async function getIP(ipAddress) {
    try {
        const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=at_8BoXOf1PmErD1IVaAVoBIJ0kMwc6Q&ipAddress=${ipAddress}`, { mode: 'cors' });
        const ipData = await response.json();
        console.log(ipData);
        let ipDisplay = new IpInfo(ipData.ip,
            ipData.location.city,
            ipData.location.lat,
            ipData.location.lng,
            ipData.location.timezone,
            ipData.isp
        );

        displayData(ipDisplay);
        initMap(ipDisplay);

    } catch (error) {
        console.log(error);
    }
}

function displayData(ipDisplay) {
    displayIP.innerText = ipDisplay.address;
    displayLocation.innerText = ipDisplay.city;
    displayTimezone.innerText = ipDisplay.timezone;
    displayISP.innerText = ipDisplay.isp;
}

export { getIP, displayData };