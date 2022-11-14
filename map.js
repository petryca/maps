(() => {



    mapboxgl.accessToken = 'YOUR_API_KEY_GOES_HERE';

    let map = new mapboxgl.Map({
        container: 'map',
        center: [14.441833340850287, 50.07966501273455],
        zoom: 15,
        style: 'mapbox://style/mapbox/dark-v10'
    });

    map.scrollZoom.disable();
    map.addControl(new mapboxgl.NavigationControl());

    let el = document.createElement('div');
    el.className = 'pin';

    new mapboxgl.Marker({
        element: el,
        anchor: 'bottom'
    })
        .setLngLat([14.441833340850287, 50.07966501273455])
        .addTo(map);

})();
