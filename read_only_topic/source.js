// SG.hu read_only_topic v1.0 20111107
// K�sz�tette: dzsani
// Inspir�ci�: cSuwwi - Drom - http://drom.hu/

// M�k�d�si m�d
// 0: feh�rlista, 1: feketelista
// Ha null�n hagyod, akkor azok �rhatnak a topikba,
// akiket felsorolsz a lentebbi n�vlist�ba.
// Ha egyre �ll�tod, akkor mindenki �rhat, kiv�ve
// a lentebb felsorolt felhaszn�l�k.

var rot_mode = 1;

// Felhaszn�l�k feh�rlist�ja
// Vessz�vel elv�lasztva sorold fel azokat a felhaszn�l�neveket
// akiknek enged�lyezed az �zenetk�ld�st. Sz�k�zt ne haszn�lj!
// P�lda: var pt_users = 'n�v1,n�v2,n�v3';

var rot_users = '';


// EZT A R�SZT NE M�DOS�TSD !!!
$(document).ready(function() {
	
	// Create an array with the nicknames
	rot_users = rot_users.split(',');	
	
	// Submit event
	$('form[name="newmessage"] a:last').click(function(e) {

		// Get nickname
		var nick = $('.std1:eq(1)').html().replace("Bejelentkezve: ","");
		
		// Check user
		if(rot_users.indexOf(nick) == -1) {
			
			// Prevent browser default submission
			e.preventDefault();
			
			// Show error message
			alert('Nincs jogosults�god �zenetet k�ldeni ebbe a t�m�ba!');
		}
	});
	
});