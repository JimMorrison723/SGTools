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
$(document).ready(function() {
	
	// Create an array with the nicknames
	bl_users = bl_users.split(',');
	
	// Iterate over the posts
	$('.post').each(function() {
		
		// Find username
		var nick = $(this).find('a[href*="felhasznalo"] img').length ? $(this).find('[href*="felhasznalo"] img').attr('title') : $(this).find('[href*="felhasznalo"]').html();
			nick = nick.replace(" - VIP","");
			
		// Hide the comment if its from a banned user
		if(bl_users.indexOf(nick) != -1) {
			$(this).hide();
		}
	});
});