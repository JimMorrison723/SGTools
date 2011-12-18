// SG.hu style_switcher v1.0 20111217
// K�sz�tette: dzsani

// St�luslista
// Itt sorold fel hogy milyen skinek legyenek
// �s azokhoz milyen CSS + JS tartozik. P�lda:
//
// var sw_styles = new Array();
// sw_styles.push({ css : ['link1.css', 'link2,css'], js : ['link1.js'] });
// sw_styles.push({ css : ['link3.css'], js : ['link2.js'] });


var sw_styles = new Array();
	sw_styles.push({ css : [''], js : [''] });



// Alap�rtelmezett skin sorsz�ma
// Null�t�l kezd�dik a sorsz�m, nulla az els� elem
// False ha mell�zni akarjuk a skinek bet�lt�s�t
var sw_default = 0;


// HASZN�LAT - gombok a topikba
// <a href="javascript:style_switcher.switchTo(false);">Nincs t�ma</a>
// <a href="javascript:style_switcher.switchTo(0);">Els� t�ma</a>
// <a href="javascript:style_switcher.switchTo(1);">M�sodik t�ma</a>



// EZT A R�SZT NE M�DOS�TSD !!!
var style_switcher = {

	init : function() {
	
		// Get topic ID
		var id = style_switcher.getTopicId();
		
		// Get skin
		var skin = style_switcher.getSkin( id );

		// Return when no default skin set
		if(skin === false || skin == 'false') {
			return;
		}
		
		// Load the skin
		style_switcher.loadSkin( skin );
	},
	
	switchTo : function( skin ) {
		
		// Get topic ID
		var id = style_switcher.getTopicId();
		
		// Save new value
		style_switcher.setCookie( 'skin_'+id, skin, 100 );
		
		// Reload the topic
		window.location.reload();
	},

	getTopicId : function() {

		return document.location.href.split('?')[1].split('&')[0].split('=')[1];
	},
	
	getSkin : function( id ) {
	
		var skin = style_switcher.getCookie('skin_'+id);
			
			if(typeof skin == 'undefined' && skin == null) {
				return sw_default;
			} else {
				return skin;
			}
	},
	
	loadSkin : function( skin ) {
	
		// CSS

		if(typeof sw_styles[skin]['css'] != 'undefined') {
			for(c = 0; c < sw_styles[skin]['css'].length; c++) {
				if(sw_styles[skin]['css'][c] != '') {
					$('<link type="text/css" href="'+sw_styles[skin]['css'][c]+'" rel="stylesheet">').appendTo('head');
				}
			}
		}
		
		// JS
		if(typeof sw_styles[skin]['js'] != 'undefined') {
			for(c = 0; c < sw_styles[skin]['js'].length; c++) {
				if(sw_styles[skin]['js'][c] != '') {
					$('<script type="text/javascript" src="'+sw_styles[skin]['js'][c]+'"></script>').appendTo('head');
				}
			}
		}
	},
	
	setCookie : function( c_name, value, exdays ) {
		var exdate=new Date();
		exdate.setDate(exdate.getDate() + exdays);
		var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
		document.cookie=c_name + "=" + c_value;
	},


	getCookie : function( c_name ) {
		var i,x,y,ARRcookies=document.cookie.split(";");
		for (i=0;i<ARRcookies.length;i++) {
			x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
			y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
			x=x.replace(/^\s+|\s+$/g,"");
			if (x==c_name) {
				return unescape(y);
			}
		}
	}
};


$(document).ready(function() {
	style_switcher.init();
});