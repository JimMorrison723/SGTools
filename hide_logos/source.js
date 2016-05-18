// SG.hu hide_logos v2.0 20160518
// Készítette: dzsani
// Frissítette: Jim Morrison

// Ezzel a script eltávolítja az összes logót
// és a felhasználónevet teszi a helyére.

// EZT A RÉSZT NE MÓDOSÍTSD !!!
$(document).ready(function() {
	
	$('.post').each(function() {
		
		// Comments with logo image
		if($(this).find('a[href*="felhasznalo"] img').length) {
		
			// Find nickname
			var nick = $(this).find('a[href*="felhasznalo"] img').attr('title');
				nick = nick.replace(" - VIP","");
			
			// Remove logo
			$(this).find('a[href*="felhasznalo"] img').remove();
			
			// Insert copyright + username
			$(this).find('a[href*="felhasznalo"]').html('&nbsp;&copy;&nbsp;' + nick);
		}
	});
});
