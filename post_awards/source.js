// SG.hu post_awards v2.0 20160518
// Készítette: dzsani
// Frissítette: Jim Morrison
// Inspiráció: cSuwwi - Drom - http://drom.hu/

// Awards lista Objektum
// Az objektum elemei közül egyedül a nick elemet kötelezõ megadni,
// a többi tetszés szerint elhagyható. Az objektum lehetséges elemeit
// lentebb láthatod.

// Az awards objektum lehetséges elemei:
// - nick: kötelezõ, keresett felhasználó
// - placeholder: elhagyható, 0: logó után, 1: kommentazonosító elé, alapértelmezett: 1 
// - image: elhagyható, képet szúr be, egy kép URL-jét kell megadni
// - text: elhagyható, egy szöveget szúr be a script
// - tooltip: elhagyható, egérrel a beszúrt elemek fölé állva kiírja az itt megadott szöveget
// - color: elhagyható, a beszúrt szöveg színét lehet megadni vele
// - url: elhagyható, a beszúrt képet ésvagy szöveget lehet linkelni vele

// Példa:

// var aw_users = [
//		{ nick : 'Ability', placeholder : 0, image : '/kep/faces/vigyor3.gif' },
// 		{ nick : 'dzsaniii', placeholder : 1, text : 'Alreg' }
// ];

var aw_users = [
	{ nick : '', placeholder : 0 },
];

// EZT A RÉSZT NE MÓDOSÍTSD !!!
$(document).ready(function(){

	$('.post header').each(function(){

		// Find username
		var nick = $(this).find('a[href*="felhasznalo"] img').length ? $(this).find('a[href*="felhasznalo"] img').attr('title') : $(this).find('a[href*="felhasznalo"]').html();
			nick = nick.replace(" - VIP","");
		
		// Iterate over the user list
		for(c = 0; c < aw_users.length; c++) {
			
			// User match
			if(nick == aw_users[c]['nick']) {
				
				// Insert placeholder
				if(typeof aw_users[c]['placeholder'] != "undefined" && aw_users[c]['placeholder'] == 0) {
					var placeholder = $('<span class="posted pull-right"></span>').insertAfter( $(this).find('a:last') );
				} else {
					var placeholder = $('<span class="posted pull-right"></span>').insertAfter( $(this).find('a:last').prev() );
					/*$('<span class="separator pull-right"></span>').insertBefore(placeholder);*/
				}
				
				// Insert the image
				if(typeof aw_users[c]['image'] != "undefined" && aw_users[c]['image'] != '') {
					$('<img src="'+aw_users[c]['image']+'" align="absmiddle">').appendTo(placeholder).css('border', 0);
				}
				
				// Insert text
				if(typeof aw_users[c]['text'] != "undefined" && aw_users[c]['text'] != '') {
					$('<span class=""> '+aw_users[c]['text']+'</span>').appendTo(placeholder);
				}

				// Insert anchor
				if(typeof aw_users[c]['url'] != "undefined" && aw_users[c]['url'] != '') {
					$(placeholder).find('img, span').wrap('<a href="'+aw_users[c]['url']+'" target="_blank">');
					$(placeholder).find('a').css({ 'text-decoration' : 'none', 'color' : '#fff' });
				}
			
				// Set text color
				if(typeof aw_users[c]['color'] != "undefined" && aw_users[c]['color'] != '') {
					$(placeholder).find('a, span').css('color', aw_users[c]['color']);
				}
				
				// Set Tooltip
				if(typeof aw_users[c]['tooltip'] != "undefined" && aw_users[c]['tooltip'] != '') {
					$(placeholder).find('img, span, a').attr('title', aw_users[c]['tooltip']);
				}
			}
		}
		
	});
});