
$(document).ready(function(){
		// Start des Barcode-Scanner Plugins durch Klick auf SCAN-Button
		$( "#scan" ).click(function() {
			var scanner = cordova.require("cordova/plugin/BarcodeScanner");
			scanner.scan(
			  function (result) {
				  alert("We got a barcode\n" +
						"Result: " + result.text + "\n" +
						"Format: " + result.format + "\n" +
						"Cancelled: " + result.cancelled);
			  }, 
			  function (error) {
				  alert("Scanning failed: " + error);
			  }
			);
		});
	});