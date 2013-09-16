/* 
    Document   : JS-Script
    Created on : 11.09.2013, 15:04:00
    Author     : Linda Saager
    Description: Wertet die Ergebnisse der Formelecke aus
*/


function auswerten_1(fra_nr) {
	var punkte = 0;				/* Variable 'punkte' einführen, die die Anzahl der richtigen Antworten hochzählt */
	var name = 'fra_';			/* Variable 'name' auf 'fra_' setzen, alle Variablen mit dem Anfang 'fra_' gehören dazu */
	var pmax = 8;				/* die maximale Anzahl an Fragen bzw zu erreichenden Punkten */

	for (var i = 1; i <= pmax ; i++)if (check_1(name + i)) punkte++;	/* for-Schleife, die die Punkte hochzählt */

	document.getElementById('ausgabe_1').firstChild.data =			/* der Button mit der id = 'ausgabe_1' gibt den Text inklusive der Anzahl der richtig beantworteten Antworten */
	'Du hast '+ punkte +' von '+ pmax +
	' möglichen Punkten erreicht. Das sind '+ Math.round(punkte*100/pmax) +' Prozent.';	/* der prozentuale Anteile wird ausgerechnet */
}

function check_1(fra) {
	for (var i = 0; obj = document.getElementsByName(fra)[i]; i++){	/* for-Schleife, die beim Durchlaufen abfragt, wieviele gecheckt sind */
		if (obj.checked && obj.value === 'richtig_1') return true;	/* falls ein gechektes Objekt auch die value === 'richtig_1' hat, wird true zurückgegeben */
	}
	return false;													/* falls nicht, dann wird false zurückgegeben */
}