// SG.hu hide_logos v1.0 20111114
// K�sz�tette: dzsani

// Ezzel a script elt�vol�tja az �sszes log�t
// �s a felhaszn�l�nevet teszi a hely�re.


// EZT A R�SZT NE M�DOS�TSD !!!
$(document).ready(function() {
	
	$('.topichead').each(function() {
		
		// Comments with logo image
		if($(this).find('a[href*="forumuserinfo.php"] img').length) {
		
			// Find nickname
			var nick = $(this).find('a[href*="forumuserinfo.php"] img').attr('title');
				nick = nick.replace(" - VIP","");
			
			// Remove logo
			$(this).find('a[href*="forumuserinfo.php"] img').remove();
			
			// Insert username
			$(this).find('a[href*="forumuserinfo.php"]').html(nick);
			
			// Insert copyright
			$(this).find('a[href*="forumuserinfo.php"]').before('&nbsp;&copy;&nbsp;');
		}
	});
});
