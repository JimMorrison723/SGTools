// SG.hu hide_logos v2.0 20160518
// Készítette: dzsani
// Frissítette: Jim Morrison

// Ezzel a script eltávolítja az összes logót
// és a felhasználónevet teszi a helyére.

// EZT A RÉSZT NE MÓDOSÍTSD !!!
$(document).ready(function(){$(".post").each(function(){if($(this).find('a[href*="felhasznalo"] img').length){var a=$(this).find('a[href*="felhasznalo"] img').attr("title");a=a.replace(" - VIP",""),$(this).find('a[href*="felhasznalo"] img').remove(),$(this).find('a[href*="felhasznalo"]').html("&nbsp;&copy;&nbsp;"+a)}})});