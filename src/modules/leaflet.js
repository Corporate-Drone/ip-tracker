function initMap(ipDisplay) {
    if (ipDisplay) {
        //Create map div
        let heading = document.querySelector('h1');
        let newMap = document.createElement('div');
        newMap.setAttribute('id', 'map');
        heading.after(newMap);

        //Generate Leaflet JS map
        let map = L.map('map').setView([ipDisplay.latitude, ipDisplay.longitude], 15);

        L.esri.basemapLayer('Topographic').addTo(map);

        let circle = L.circle([ipDisplay.latitude, ipDisplay.longitude], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(map);

        circle.bindPopup(`${ipDisplay.address} is located in this   area.`);
    } else {
        //Generate map on start without IP address coordinates (default map view)
        let map = L.map('map').setView([51.505, -0.09], 13);
        L.esri.basemapLayer('Topographic').addTo(map);
    }
}

export default initMap;