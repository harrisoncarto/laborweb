var geojsonMarkerOptions = {
	radius: 10,
	fillColor: "#ff0000",
	weight: 0,
	fillOpacity: .5
};

var map = L.map('map', {
	center: [38.0902, -95.7129],
	zoom: 5
});

var Stadia_AlidadeSmoothDark = L.tileLayer(
	'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
		maxZoom: 20,
		minZoom: 4,
		attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
	}).addTo(map);

var sites;

$.getJSON("sites.geojson", function (data) {
	sites = L.geoJson(data, {
		onEachFeature: function (feature, layer) {
			layer.bindPopup("<b>" + "Event: " + "</b>"  + feature.properties.event + "<br>" + feature.properties.date + "<br>" + "<b>" + "Killed: " + "</b>" + feature.properties.killed);
		},
		pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng, geojsonMarkerOptions);
		}
	}).addTo(map);
});

setTimeout(function () {
    map.invalidateSize();
}, 1000);