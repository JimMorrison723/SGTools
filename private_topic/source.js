// SG.hu private_topic v2.0 20160518
// Készítette: dzsani
// Frissítette: Jim Morrison

// Mûködési mód
// 0: fehérlista, 1: feketelista
// Ha nullán hagyod, akkor azok léphetnek be a topikba,
// akiket felsorolsz a lentebbi névlistába.
// Ha egyre állítod, akkor mindenki beléphet, kivéve
// a lentebb felsorolt felhasználók.

var pt_mode = 1;

// Felhasználók fehérlistája
// Vesszõvel elválasztva sorold fel azokat a felhasználóneveket
// akiknek engedélyezed a topikba lépést. Szóközt ne használj!
// Példa: var pt_users = 'név1,név2,név3';

var pt_users = '';

// EZT A RÉSZT NE MÓDOSÍTSD !!!
$(document).ready(function(){function s(){alert("Ez egy privát téma, nincs jogosultságod az olvasásához!"),history.go(-1)}pt_users=pt_users.split(",");var t=$("#comments-login span").html();0==pt_mode?-1==pt_users.indexOf(t)&&s():-1!=pt_users.indexOf(t)&&s()});