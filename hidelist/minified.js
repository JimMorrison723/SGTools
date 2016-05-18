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
$(document).ready(function(){hl_users=hl_users.split(","),$(".post").each(function(){var t=$(this).find('a[href*="felhasznalo"] img').length?$(this).find('a[href*="felhasznalo"] img').attr("title"):$(this).find('a[href*="felhasznalo"]').html();if(t=t.replace(" - VIP",""),-1!=hl_users.indexOf(t)){var e=$(this).find("section.body"),i=$(this).find("footer");$(e).hide(),$(i).hide(),$('<p class="ts_hidden_comment">Moderált felhasználó! Kattints ide az üzenet megtekintéséhez</p>').insertAfter($(e))}}),$(".ts_hidden_comment").css({"text-align":"center",font:"normal normal normal 13px/16px Arial, serif",cursor:"pointer"}),$(".ts_hidden_comment").click(function(){$(this).parent(".post").find("section").show(),$(this).parent(".post").find("footer").show(),$(this).hide()})});