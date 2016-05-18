// SG.hu disable_point_system v1.0 20111113
// Készítette: dzsani

// ELAVULT

// Ezzel a scripttel teljesen kikapcsolhatod a
// pontrendszert.

// CSS
.ertekelkep { display: none; }

// Javascript
$(document).ready(function(){
	$('.msg-text').each(function() {
		$(this).next().click();
	});
});