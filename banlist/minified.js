// SG.hu topic banlist v1.0 20111107
// K�sz�tette: dzsani
// Inspir�ci�: cSuwwi - Drom - http://drom.hu/


// Tiltott felhaszn�l�k
// Vessz�vel elv�lasztva sorold fel azokat a felhaszn�l�neveket
// akiket ki akarsz tiltani a t�m�b�l. Sz�k�zt ne haszn�lj!
// P�lda: var bl_users = 'n�v1,n�v2,n�v3';

var bl_users = '';

// EZT A R�SZT NE M�DOS�TSD !!!
$(document).ready(function(){bl_users=bl_users.split(',');$('.topichead').each(function(){var a=$(this).find('a[href*="forumuserinfo.php"] img').length?$(this).find('a[href*="forumuserinfo.php"] img').attr('title'):$(this).find('a[href*="forumuserinfo.php"]').html();a=a.replace(" - VIP","");if(bl_users.indexOf(a)!=-1){$(this).parents('center:first').hide()}})});