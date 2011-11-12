// SG.hu awards v1.0 20111112
// K�sz�tette: dzsani
// Inspir�ci�: cSuwwi - Drom - http://drom.hu/

// Awards lista Objektum
// Az objektum elemei k�z�l a nick �s a placeholder elemeket kell 
// k�telez�en megadni. A t�bbi elem tetsz�s szerint elhagyhat�.
// A objektum elemeinek listj�a a lenti p�ld�ban tal�lhat�.
// P�lda:

// var aw_users = [
//		{ nick : 'Ability', placeholder : 0, image : '/kep/faces/vigyor3.gif', tooltip : 'A t�ma h�zigazd�ja', text : 'H�zigazda', url : '/forumuserinfo.php?uuserid=1105823948' },
// 		{ nick : 'dzsaniii', placeholder : 1, image : '/kep/faces/bdead.gif', tooltip : 'Az alregem', text : 'Alreg' }
// ];

var aw_users = [
	{ nick : '', placeholder : 0 }
];



// EZT A R�SZT NE M�DOS�TSD !!!
$(document).ready(function(){

	$('.topichead').each(function(){

		// Find username
		var nick = $(this).find('a[href*="forumuserinfo.php"] img').length ? $(this).find('a[href*="forumuserinfo.php"] img').attr('title') : $(this).find('a[href*="forumuserinfo.php"]').html();
			nick = nick.replace(" - VIP","");
		
		// Iterate over the user list
		for(c = 0; c < aw_users.length; c++) {
			
			// User match
			if(nick == aw_users[c]['nick']) {
				
				// Insert placeholder
				if(aw_users[c]['placeholder'] == 0) {
					var placeholder = $('<span></span>').insertAfter( $(this).find('table:first img:last') );
				} else {
					var placeholder = $('<span></span>').insertAfter( $(this).find('a:last').prev() );
					$('<span> | </span>').insertBefore(placeholder);
				}
				
				// Insert the image
				if(typeof aw_users[c]['image'] != "undefined" && aw_users[c]['image'] != '') {
					$('<img src="'+aw_users[c]['image']+'" align="absmiddle">').appendTo(placeholder).css('border', 0);
				}
				
				// Insert text
				if(typeof aw_users[c]['text'] != "undefined" && aw_users[c]['text'] != '') {
					$('<span> '+aw_users[c]['text']+'</span>').appendTo(placeholder);
				}

				// Insert anchor
				if(typeof aw_users[c]['url'] != "undefined" && aw_users[c]['url'] != '') {
					$(placeholder).find('img, span').wrap('<a href="'+aw_users[c]['url']+'" target="_blank">');
					$(placeholder).find('a').css({ 'text-decoration' : 'none', 'color' : '#fff' });
				}

				// Set Tooltip
				if(typeof aw_users[c]['tooltip'] != "undefined" && aw_users[c]['tooltip'] != '') {
					$(placeholder).find('img, span, a').attr('title', aw_users[c]['tooltip']);
				}
			}
		}
		
	});
});