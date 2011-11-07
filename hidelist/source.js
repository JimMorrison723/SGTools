// SG.hu topic banlist v1.0 20111107
// K�sz�tette: dzsani
// Inspir�ci�: cSuwwi - Drom - http://drom.hu/


// Tiltott felhaszn�l�k
// Vessz�vel elv�lasztva sorold fel azokat a felhaszn�l�neveket
// akiket ki akarsz tiltani a t�m�b�l. Sz�k�zt ne haszn�lj!
// P�lda: var bl_users = 'n�v1,n�v2,n�v3';

var hl_users = 'Ability';

// EZT A R�SZT NE M�DOS�TSD !!!
$(document).ready(function() {
	
	// Create an array with the nicknames
	hl_users = hl_users.split(',');
	
	// Iterate over the posts
	$('.topichead').each(function() {
		
		// Find username
		var nick = $(this).find('a[href*="forumuserinfo.php"] img').length ? $(this).find('a[href*="forumuserinfo.php"] img').attr('title') : $(this).find('a[href*="forumuserinfo.php"]').html();
			nick = nick.replace(" - VIP","");
			
		// Hide the comment text if its from a banned user
		if(hl_users.indexOf(nick) != -1) {

			// Text element
			var text = $(this).parents('center:first').find('.maskwindow');
			var signature = $(this).parents('center:first').find('.msg-bottom');
			
			// Hide the text and signature
			$(text).hide();
			$(signature).hide();
			
			// Create "show" anchor
			$('<p class="ts_hidden_comment">Moder�lt felhaszn�l�! Kattints ide az �zenet megtekint�s�hez</p>').insertAfter($(text));
		}
	});
	
	// Add some style to the "show" button
	$('.ts_hidden_comment').css({ 'text-align' : 'center', 'font' : 'normal normal normal 13px/16px Arial, serif', 'cursor' : 'pointer' });
	
	// Click event handler to show the message
	$('.ts_hidden_comment').click(function() {
		$(this).parents('center:first').find('.maskwindow').show();
		$(this).parents('center:first').find('.msg-bottom').show();
		$(this).hide();
	});
});