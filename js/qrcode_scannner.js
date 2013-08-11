
$(document).ready(function(){
		// Start des Barcode-Scanner Plugins durch Klick auf SCAN-Button
		$( "#scan" ).click(function() {
			var scanner = cordova.require("cordova/plugin/BarcodeScanner");
			scanner.scan(
			  function (result) {
				  /*alert("We got a barcode\n" +
						"Result: " + result.text + "\n" +
						"Format: " + result.format + "\n" +
						"Cancelled: " + result.cancelled);*/
				// Check if Result is a QR-Code
				if(result.format == 'QR_CODE'){
					alert('das ist ein QR-Code');
				}
				else{
					alert('Sorry, aber das ist kein QR-Code!');
				}		
						
			  }, 
			  function (error) {
				  alert("Scanning failed: " + error);
			  }
			);
		});
	});
	
function scan_invalid(){
	alert('Sorry, aber das ist kein gültiger QR-Code zum Lokalisieren der Position!');
}

/*function no_qr(){
	alert('Sorry, aber das ist kein QR-Code!');
}*/
