// SG.hu image_resizer v1.0 20111108
// Készítette: dzsani
// Inspiráció: cSuwwi - Drom - http://drom.hu/

$(document).ready(function(){$(".maskwindow img").each(function(){$(this).removeAttr("onload");$(this).attr("resizemod","off")});$(".maskwindow img").load(function(){if($(this).width()>200){$(this).width(200);$(this).addClass("ir_source")}});$(".ir_source").live("click",function(){$('<div class="ir_overlay"></div>').prependTo("body").css({width:"100%",height:"100%",position:"fixed",left:0,top:0,zIndex:100,backgroundColor:"#999",opacity:.6});var a=$('<div class="ir_wrapper"></div>').prependTo("body").css({position:"fixed",zIndex:101,boxShadow:"0px 0px 10px #000"});var b=$(this).clone().prependTo(a).attr("class","ir_image").removeAttr("onload");$(this).css({width:"auto",height:"auto"});var c=$(window).width()-50;var d=$(window).height()-50;var e=$(this).width()>c?c:$(this).width();var f=$(this).height()>d?d:$(this).height();var g=$(this).width()/$(this).height();if($(this).width()>$(this).height()){e=e;f=parseInt(e/g)}else{e=parseInt(f*g);f=f}var h=($(window).height()-f)/2;var i=($(window).width()-e)/2;$(b).css({width:e,height:f,cursor:"pointer"});$(a).css({width:e,height:f,top:h,left:i});$(this).width(200)});$(".ir_image").live("click",function(){$(this).remove();$(".ir_wrapper").remove();$(".ir_overlay").remove()})})