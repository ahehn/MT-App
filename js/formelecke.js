/* 
    Document   : JS-Script
    Created on : 11.09.2013, 15:04:00
    Author     : Linda Saager
    Description: Wertet die Ergebnisse der Formelecke aus
*/


function auswerten_1(fra_nr) {
	var punkte = 0;
	var name = 'fra_';
	var pmax = 8;

	for (var i = 1; i <= pmax ; i++)if (check_1(name + i)) punkte++;

	document.getElementById('ausgabe_1').firstChild.data =
	'Du hast '+ punkte +' von '+ pmax +
	' möglichen Punkten erreicht. Das sind '+ Math.round(punkte*100/pmax) +' Prozent.';
}

function check_1(fra) {
	for (var i = 0; obj = document.getElementsByName(fra)[i]; i++){
		if (obj.checked && obj.value === 'richtig_1') return true;
	}
	return false;
}