// SG.hu bbcode_table v1.0 20180311
// Készítette: Jim Morrison

// Ez a script lehetővé teszi, hogy a topikban táblázatok jelenjenek meg
// Csak érvényes tábla struktúrát támogatja (table > thead, tbody - stb)
// Példa (hozzászólásban):
// [table]
// [thead]
// [tr]
// [th]elso[/th]
// [th]masodik[/th]
// [/tr]
// [/thead]
// [tbody]
// [tr]
// [td]1[/td]
// [td]2[/td]
// [/tr]
// [tr]
// [td]3[/td]
// [td]4[/td]
// [/tr]
// [/tbody]
// [/table]

// EZT A RÉSZT NE MÓDOSÍTSD !!!
$("section.body").each(function(t){let e,a=$(this).html();/\[table\]([\s\S]*?)\[\/table\]/gim.test(a)&&/\[thead\]([\s\S]*?)\[\/thead\]/gim.test(a)&&(e=a.replace(/\[thead\]([\s\S]*?)\[\/thead\]/gim,"<thead>$1</thead>"),/\[tr\]([\s\S]*?)\[\/tr\]/gim.test(a)&&(e=(e=e.replace(/\[tr\]([\s\S]*?)\[\/tr\]/gim,"<tr>$1</tr>")).replace(/\[th\]([\s\S]*?)\[\/th\]/gim,"<th>$1</th>")),/\[tbody\]([\s\S]*?)\[\/tbody\]/gim.test(a)&&(e=(e=(e=e.replace(/\[tr\]([\s\S]*?)\[\/tr\]/gim,"<tr>$1</tr>")).replace(/\[td\]([\s\S]*?)\[\/td\]/gim,"<td>$1</td>")).replace(/\[tbody\]([\s\S]*?)\[\/tbody\]/gim,"<tbody>$1</tbody>")),e=(e=e.replace(/\[table\]([\s\S]*?)\[\/table\]/gim,'<table style="width: 100% " class="post-table">$1</table>')).replace(/<br.*?>/gi,""),$(this).html(e.trim()))});