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

L.tileLayer(
	'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
	}).addTo(map);

var sites;

$.getJSON("sites.geojson", function (data) {
	sites = L.geoJson(data, {
		onEachFeature: function (feature, layer) {
			layer.bindPopup("<b>" + "Event: " + "</b>"  + feature.properties.event + "<br>" + "<i>" + feature.properties.date + "</i>" + "<br>" + "<b>" + "Industry: " + "</b>" + feature.properties.industry + "<br>" + "<b>" + "Killed: " + "</b>" + feature.properties.killed);
		},
		pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng, geojsonMarkerOptions);
		}
	}).addTo(map);
});