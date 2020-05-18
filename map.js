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

var OpenStreetMap_Mapnik = L.tileLayer(
	'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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