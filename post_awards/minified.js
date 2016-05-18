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
$(document).ready(function(){$(".post header").each(function(){var e=$(this).find('a[href*="felhasznalo"] img').length?$(this).find('a[href*="felhasznalo"] img').attr("title"):$(this).find('a[href*="felhasznalo"]').html();for(e=e.replace(" - VIP",""),c=0;c<aw_users.length;c++)if(e==aw_users[c].nick){if("undefined"!=typeof aw_users[c].placeholder&&0==aw_users[c].placeholder)var s=$('<span class="posted pull-right"></span>').insertAfter($(this).find("a:last"));else var s=$('<span class="posted pull-right"></span>').insertAfter($(this).find("a:last").prev());"undefined"!=typeof aw_users[c].image&&""!=aw_users[c].image&&$('<img src="'+aw_users[c].image+'" align="absmiddle">').appendTo(s).css("border",0),"undefined"!=typeof aw_users[c].text&&""!=aw_users[c].text&&$('<span class=""> '+aw_users[c].text+"</span>").appendTo(s),"undefined"!=typeof aw_users[c].url&&""!=aw_users[c].url&&($(s).find("img, span").wrap('<a href="'+aw_users[c].url+'" target="_blank">'),$(s).find("a").css({"text-decoration":"none",color:"#fff"})),"undefined"!=typeof aw_users[c].color&&""!=aw_users[c].color&&$(s).find("a, span").css("color",aw_users[c].color),"undefined"!=typeof aw_users[c].tooltip&&""!=aw_users[c].tooltip&&$(s).find("img, span, a").attr("title",aw_users[c].tooltip)}})});