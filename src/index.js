import initMap from './modules/leaflet';
import { getIP, displayData } from './modules/ipify';

const ipSubmit = document.querySelector('#ip-submit');
const submitBtn = document.querySelector('#submit');

//Generate map on start
initMap();

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    //check if submission is in IP address form
    if ((/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipSubmit.value))) {
        //clear map
        map.remove();

        getIP(ipSubmit.value);
        ipSubmit.value = "";
    } else {
        alert("Please enter a valid IP address!");
    }
})




