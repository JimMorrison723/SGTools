// SG.hu topic read_only_topic v1.0 20111107
// K�sz�tette: dzsani
// Inspir�ci�: cSuwwi - Drom - http://drom.hu/


// Felhaszn�l�k feh�rlist�ja
// Vessz�vel elv�lasztva sorold fel azokat a felhaszn�l�neveket
// akiknek enged�lyezed az �zenetk�ld�st. Sz�k�zt ne haszn�lj!
// P�lda: var pt_users = 'n�v1,n�v2,n�v3';

var rot_users = '';


// EZT A R�SZT NE M�DOS�TSD !!!
$(document).ready(function(){rot_users=rot_users.split(',');$('form[name="newmessage"] a:last').click(function(e){var a=$('.std1:eq(1)').html().replace("Bejelentkezve: ","");if(rot_users.indexOf(a)==-1){e.preventDefault();alert('Nincs jogosults�god �zenetet k�ldeni ebbe a t�m�ba!')}})});