// SG.hu topic private_topic v1.0 20111107
// K�sz�tette: dzsani
// Inspir�ci�: cSuwwi - Drom - http://drom.hu/


// Felhaszn�l�k feh�rlist�ja
// Vessz�vel elv�lasztva sorold fel azokat a felhaszn�l�neveket
// akiknek enged�lyezed a topikba l�p�st. Sz�k�zt ne haszn�lj!
// P�lda: var pt_users = 'n�v1,n�v2,n�v3';

var pt_users = '';


// EZT A R�SZT NE M�DOS�TSD !!!
$(document).ready(function(){pt_users=pt_users.split(',');var a=$('.std1:eq(1)').html().replace("Bejelentkezve: ","");if(pt_users.indexOf(a)==-1){alert('Ez egy priv�t t�ma, nincs jogosults�god az olvas�s�hoz!');history.go(-1)}});