Topik scriptek az SG.hu fórumához.

TUDNIVALÓK:
----

Minden scriptnek külön mappája van. A mappákban található source állomány a fejlesztőknek 
van fenntartva, akik talán bele akarnak szerkeszteni a script működésébe. Akik csak használni
akarják a scripteket, nekik a minified verziót kell választaniuk, mert egyszerűbb velük 
dolgozni, kisebb a méretük.

A scripteket tekintsétek egyfajta építőelemeknek (moduloknak), amiket lehet kombinálni. 
Minden egyes scriptnél az a cél, hogy minél egyszerűbbek és kisebbek legyenek. Nincsenek 
beállítási lehetőségek, nincs egy nagy script ami mindent tud. Ehelyett van sok apró, 
amiket egymással lehet kombiálni, így elérve a régi scriptek funkcionalitását.


HASZNÁLAT:
----

A kiválasztott script minified.js állományából kimásolod a teljes kódot. A topik fejléc
`Javascript` részébe MÁSOLOD A KÓDOT. Példa:

```
// SG.hu topic banlist v1.0 20111107
// Készítette: dzsani
// Inspiráció: cSuwwi - Drom - http://drom.hu/


// Tiltott felhasználók
// Vesszővel elválasztva sorold fel azokat a felhasználóneveket
// akiket ki akarsz tiltani a témából. Szóközt ne használj!
// Példa: var bl_users = 'név1,név2,név3';

var bl_users = '';

// EZT A RÉSZT NE MÓDOSÍTSD !!!
$(document).ready(function(){bl_users=bl_users.split(',');$('.topichead').each(function(){
var a=$(this).find('a[href*="forumuserinfo.php"] img').length?$(this).find('a[href*="forum
userinfo.php"] img').attr('title'):$(this).find('a[href*="forumuserinfo.php"]').html();a=a
.replace(" - VIP","");if(bl_users.indexOf(a)!=-1){$(this).parents('center:first').hide()}}
)});
```


Ha több scriptet akarsz használni, győződj meg róla, hogy mindegyiket bemásoltad a `Javascript`
részbe!


Ha az adott script rendelkezik beállítási lehetőségekkel, akkor azt a script kódjának elején 
találod. Érdemes elolvasni a scriptbe írt megjegyzéseket, megmagyarázzák hogy mit hol kell 
átírni ahhoz, hogy a várt eredményt kapd.
