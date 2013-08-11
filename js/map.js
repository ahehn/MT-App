

function set_marker(){
	// Auslesen der JSON-Datei und zeichnen von Google-Maps-Markern
	$.getJSON('../daten/gebaeude.json', function(json) {
		$.each(json, function(bau,data) {
			var latLng = new google.maps.LatLng(data.position.latitude, data.position.longitude); 
			// Creating a marker and putting it on the map
			var marker = new google.maps.Marker({
				position: latLng,
				map: map,
				title: data.name,
				icon: '../bilder/' + bau + '.png'
			});
		});
	});
	alert('marker buildings success');
}