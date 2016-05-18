// SG.hu topic banlist v2.0 20160518
// Készítette: dzsani 
// Frissítette: Jim Morrison
// Inspiráció: cSuwwi - Drom - http://drom.hu/


// Tiltott felhasználók
// Vesszõvel elválasztva sorold fel azokat a felhasználóneveket
// akiket ki akarsz tiltani a témából. Szóközt ne használj!
// Példa: var bl_users = 'név1,név2,név3';

var bl_users = '';

// EZT A RÉSZT NE MÓDOSÍTSD !!!
$(document).ready(function(){bl_users=bl_users.split(","),$(".post").each(function(){var e=$(this).find('a[href*="felhasznalo"] img').length?$(this).find('[href*="felhasznalo"] img').attr("title"):$(this).find('[href*="felhasznalo"]').html();e=e.replace(" - VIP",""),-1!=bl_users.indexOf(e)&&$(this).hide()})});