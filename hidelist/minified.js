// SG.hu topic hidelist v1.0 20111107
// K�sz�tette: dzsani
// Inspir�ci�: cSuwwi - Drom - http://drom.hu/


// Rejtett felhaszn�l�k
// Vessz�vel elv�lasztva sorold fel azokat a felhaszn�l�neveket
// akiket ki akarsz tiltani a t�m�b�l. Sz�k�zt ne haszn�lj!
// P�lda: var hl_users = 'n�v1,n�v2,n�v3';

var hl_users = 'Ability';

// EZT A R�SZT NE M�DOS�TSD !!!
$(document).ready(function(){hl_users=hl_users.split(',');$('.topichead').each(function(){var a=$(this).find('a[href*="forumuserinfo.php"] img').length?$(this).find('a[href*="forumuserinfo.php"] img').attr('title'):$(this).find('a[href*="forumuserinfo.php"]').html();a=a.replace(" - VIP","");if(hl_users.indexOf(a)!=-1){var b=$(this).parents('center:first').find('.maskwindow');var c=$(this).parents('center:first').find('.msg-bottom');$(b).hide();$(c).hide();$('<p class="ts_hidden_comment">Moder�lt felhaszn�l�! Kattints ide az �zenet megtekint�s�hez</p>').insertAfter($(b))}});$('.ts_hidden_comment').css({'text-align':'center','font':'normal normal normal 13px/16px Arial, serif','cursor':'pointer'});$('.ts_hidden_comment').click(function(){$(this).parents('center:first').find('.maskwindow').show();$(this).parents('center:first').find('.msg-bottom').show();$(this).hide()})});