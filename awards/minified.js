
// Awards lista Objektum
// Az objektum elemei k�z�l a nick �s a placeholder elemeket kell 
// k�telez?en megadni. A t�bbi elem tetsz�s szerint elhagyhat�.
// A objektum elemeinek listj�a a lenti p�ld�ban tal�lhat�.
// P�lda:

// var aw_users = [
//		{ nick : 'Ability', placeholder : 0, image : '/kep/faces/vigyor3.gif', tooltip : 'A t�ma h�zigazd�ja', text : 'H�zigazda', color : 'red', url : '/forumuserinfo.php?uuserid=1105823948' },
// 		{ nick : 'dzsaniii', placeholder : 1, image : '/kep/faces/bdead.gif', tooltip : 'Az alregem', text : 'Alreg' }
// ];

var aw_users = [
		{ nick : '', placeholder : 0 },
 		
];

// EZT A R�SZT NE M�DOS�TSD !!!
$(document).ready(function(){$(".topichead").each(function(){var a=$(this).find('a[href*="forumuserinfo.php"] img').length?$(this).find('a[href*="forumuserinfo.php"] img').attr("title"):$(this).find('a[href*="forumuserinfo.php"]').html();a=a.replace(" - VIP","");for(c=0;c<aw_users.length;c++){if(a==aw_users[c]["nick"]){if(aw_users[c]["placeholder"]==0){var b=$("<span></span>").appendTo($(this).find("td.left:eq(1)"))}else{var b=$("<span></span>").insertAfter($(this).find("a:last").prev());$("<span> | </span>").insertBefore(b)}if(typeof aw_users[c]["image"]!="undefined"&&aw_users[c]["image"]!=""){$('<img src="'+aw_users[c]["image"]+'" align="absmiddle">').appendTo(b).css("border",0)}if(typeof aw_users[c]["text"]!="undefined"&&aw_users[c]["text"]!=""){$("<span> "+aw_users[c]["text"]+"</span>").appendTo(b)}if(typeof aw_users[c]["url"]!="undefined"&&aw_users[c]["url"]!=""){$(b).find("img, span").wrap('<a href="'+aw_users[c]["url"]+'" target="_blank">');$(b).find("a").css({"text-decoration":"none",color:"#fff"})}if(typeof aw_users[c]["color"]!="undefined"&&aw_users[c]["color"]!=""){$(b).find("a, span").css("color",aw_users[c]["color"])}if(typeof aw_users[c]["tooltip"]!="undefined"&&aw_users[c]["tooltip"]!=""){$(b).find("img, span, a").attr("title",aw_users[c]["tooltip"])}}}})})