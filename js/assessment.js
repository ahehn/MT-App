/* 
    Document   : JS-Script
    Created on : 11.09.2013, 17:26:00
    Author     : Linda Saager
    Description: Wertet die Ergebnisse des Assessment aus
*/


function auswerten(afrage_nr) {
	var punkte = 0;
	var name = 'afrage_';
	var pmax = 13;

	for (var i = 1; i <= pmax ; i++)if (check(name + i)) punkte++;

	document.getElementById('ausgabe').firstChild.data =
	'Du hast '+ punkte +' von '+ pmax +
	' möglichen Punkten erreicht. Das sind '+ Math.round(punkte*100/pmax) +' Prozent.';
}

function check(frage) {
	for (var i = 0; obj = document.getElementsByName(frage)[i]; i++){
		if (obj.checked && obj.value === 'richtig') return true;
	}
	return false;
}