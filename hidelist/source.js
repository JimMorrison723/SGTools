// SG.hu topic hidelist v2.0 20160517
// Készítette: dzsani
// Frissítette: Jim Morrison
// Inspiráció: cSuwwi - Drom - http://drom.hu/

// Rejtett felhasználók
// Vesszõvel elválasztva sorold fel azokat a felhasználóneveket
// akiknek rejteni szeretnéd az üzeneteit a témában. Szóközt ne használj!
// Példa: var hl_users = 'név1,név2,név3';

var hl_users = '';

// EZT A RÉSZT NE MÓDOSÍTSD !!!
$(document).ready(function() {
	
	// Create an array with the nicknames
	hl_users = hl_users.split(',');
	
	// Iterate over the posts
	$('.post').each(function() {
		
		// Find username
		var nick = $(this).find('a[href*="felhasznalo"] img').length ? $(this).find('a[href*="felhasznalo"] img').attr('title') : $(this).find('a[href*="felhasznalo"]').html();
			nick = nick.replace(" - VIP","");
			
		// Hide the comment text if its from a banned user
		if(hl_users.indexOf(nick) != -1) {

			// Text element
			var text = $(this).find('section.body');
			var signature = $(this).find('footer');
			
			// Hide the text and signature
			$(text).hide();
			$(signature).hide();
			
			// Create "show" anchor
			$('<p class="ts_hidden_comment">Moderált felhasználó! Kattints ide az üzenet megtekintéséhez</p>').insertAfter($(text));
		}
	});
	
	// Add some style to the "show" button
	$('.ts_hidden_comment').css({ 'text-align' : 'center', 'font' : 'normal normal normal 13px/16px Arial, serif', 'cursor' : 'pointer' });
	
	// Click event handler to show the message
	$('.ts_hidden_comment').click(function() {
		$(this).parent('.post').find('section').show();
		$(this).parent('.post').find('footer').show();
		$(this).hide()
	});
});