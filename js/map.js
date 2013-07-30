var karte;
var marker;
var meineLongitude, meineLatitude;

/* Karte */

var positionsAusgabe = function(position){
	width = document.getElementById('karte').offsetWidth;
	height = document.getElementById('karte').offsetHeight;

	meineLongitude = position.coords.longitude;
	meineLatitude = position.coords.latitude;
	
	var optionen = {
		zoom: 13,
		center: new google.maps.LatLng(meineLatitude, meineLongitude),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	karte = new google.maps.Map(document.getElementById('karte'), optionen);
	
	window.setTimeout(function(){
		
		$.getJSON('daten/restaurants.json?='+Date.now(), function(data){
			
			$('#uebersicht').find('ul').html('');
			
			$.each(data, function(restaurant, daten){
				$('#uebersicht').find('ul').append('<li class="'+daten.Kategorie+'"><img src="http://maps.google.com/maps/api/staticmap?center='+daten.Position.Latitude+','+daten.Position.Longitude+'&zoom=13&size=50x50&markers=color:blue|size:tiny|'+daten.Position.Latitude+','+daten.Position.Longitude+'&sensor=true"/>'+restaurant+'<span>'+entfernungBerechnen(meineLongitude,meineLatitude,daten.Position.Longitude,daten.Position.Latitude)+'</span></li>');
				
				marker = new google.maps.Marker({
					map: karte,
					animation: google.maps.Animation.DROP,
					position: new google.maps.LatLng(daten.Position.Latitude,daten.Position.Longitude)
				});
				
			});
			
		//	window.scrollTo(0,1);
			
		});
		
	},1); 
};

	
/* Toolbar Funktionen */

$('nav a').on('click',function(){
	$('section, nav a').removeClass('aktiv');
	$(this).addClass('aktiv');
	$($(this).attr('href')).addClass('aktiv');
	return false;
});

/* Optionen */
$('#optionen :checkbox').on('change', function(){
	console.log('#uebersicht .'+this.className);
	$('#uebersicht li.'+this.className).toggleClass('versteckt');
});

/* Wird bei App-Start ausgeführt */

$(function(){
	navigator.geolocation.getCurrentPosition(positionsAusgabe);	        
    $('a[href=#karte], #karte').addClass("aktiv");
});
