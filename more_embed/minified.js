// SG.hu more embed v1.0 20170118
// Készítette: Jim Morrison 

// Még több embed kód támogatása
// Tömb első eleme a regex, második pedig, hogy mire írja át
// az egyező szöveget!

// Példa: var embed = [ ['/[sketchfab.../g', '<iframe....</iframe>'],
//						['/[soundcloud..]/g, '<iframe...</iframe>'] ];
// sketchfab:
// [/\[sketchfab]([a-z0-9]{32})\[\/sketchfab\]/g, '<iframe width="100%" height="500" src="https://sketchfab.com/models/$1/embed" frameborder="0" allowvr allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""></iframe>']
// soundcloud:
// [/\[soundcloud .*url="(.*)(?=").*\/]/g, '<iframe width="100%" height="130" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=$1&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>']

var embed = [ ];

// EZT A RÉSZT NE MÓDOSÍTSD !!!
$("#forum-posts-list section.body").each(function(){for(var a=0;a<embed.length;a++)$(this).html($(this).html().replace(embed[a][0],embed[a][1]))});