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

var Stamen_Toner = L.tileLayer(
	'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
		attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		subdomains: 'abcd',
		minZoom: 0,
		maxZoom: 20,
		ext: 'png'
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