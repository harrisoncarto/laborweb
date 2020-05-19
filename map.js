var geojsonMarkerOptions = {
	radius: 10,
	fillColor: "#ff0000",
	weight: 0,
	fillOpacity: .5
};

var token = 'pk.eyJ1IjoiaGFpcnlzdW5jb2xkIiwiYSI6ImNrYWQwNm9qeDA1aTIydHFwM2QxNGRjc2sifQ.EjgPn6tT5lAdWE9swlxp7w';

var map = L.map('map', {
	center: [35.0902, -115.7129],
	zoom: 4,
});

L.tileLayer(
	'https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/{z}/{x}/{y}?access_token=' + token, {
		attribution: '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(map);

var sites;

$.getJSON("sites.geojson", function (data) {
	sites = L.geoJson(data, {
		onEachFeature: function (feature, layer) {
			layer.bindPopup(`<b>Event: </b>${feature.properties.event}<br><i>${feature.properties.date}</i><br><b>Industry: </b>${feature.properties.industry}<br><b>Losses: </b>${feature.properties.losses}`);
		},
		pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng, geojsonMarkerOptions);
		}
	}).addTo(map);
});