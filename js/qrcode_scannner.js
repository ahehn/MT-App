
$(document).ready(function(){
		var qrcode_length = 11;


		// Start des Barcode-Scanner Plugins durch Klick auf SCAN-Button
		$( ".scan" ).click(function() {
			var scanner = cordova.require("cordova/plugin/BarcodeScanner");
			scanner.scan(
			  function (result) {
				  /*alert("We got a barcode\n" +
						"Result: " + result.text + "\n" +
						"Format: " + result.format + "\n" +
						"Cancelled: " + result.cancelled);*/
				// Check if scan is not cancelled
				if(result.cancelled == false){
				
					// Check if Result is a QR-Code
					if(result.format == 'QR_CODE'){				
						// Check length of Result 
						if(result.text.length == qrcode_length){
							stCode = result.text;
							$.getJSON('../daten/qrcodes.json', function(json) {
								//Flag for checking if there is a  invalid qrcode_length sing long qr-code
								f_validcode=false;
								$.each(json, function(code,data) {
									if(code == stCode){
										f_validcode = true;
										alert('Du bist hier: ' + data.name + '     Etage: ' + data.etage + '     Gebäude: '+ data.bau);
										$('#positiontext').html('<p>Du bist hier: <b>' + data.name + '</b></br>Etage: ' + data.etage + '</br>Gebäude: '+ data.bau +'</p>');
										/*var text = document.getElementById('possitiontext');
										text.innerHTML = 'Du bist hier: ' + data.name + '     Etage: ' + data.etage + '     Gebäude: '+ data.bau;*/
										$("#position").popup("open", {positionTo: "window"});
										//$.mobile.changePage('#myPlace', {transition: 'slidedown', role: 'dialog'});
									};
								});
								
								//Checking if f_validcode Flag is false
								if(f_validcode==false){
									$("#invalidqr2").popup("open", {positionTo: "window"});
									//$.mobile.changePage('#invalid', {transition: 'slidedown', role: 'popup'});
								}
							});	
						}
						else{
							alert("Scanning failed: ");
							$("#invalidqr1").popup("open", {positionTo: "window"});
						}

						
					}
					else{
						$("#noqr").popup("open", {positionTo: "window"});
					}		
				};		
			  }, 
			  function (error) {
				  alert("Scanning failed: " + error);
			  }
			);
		});
	});
	
