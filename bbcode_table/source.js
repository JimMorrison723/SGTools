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
$('section.body').each(function (ele) {
  let str = $(this).html()
  let res
  // [table][/table]
  if (/\[table\]([\s\S]*?)\[\/table\]/mig.test(str)) {
      // [thead][/thead]
      if (/\[thead\]([\s\S]*?)\[\/thead\]/mig.test(str)) {
          res = str.replace(/\[thead\]([\s\S]*?)\[\/thead\]/mig, "<thead>$1</thead>")
          // [tr][/tr]
          if (/\[tr\]([\s\S]*?)\[\/tr\]/mig.test(str)) {
              res = res.replace(/\[tr\]([\s\S]*?)\[\/tr\]/mig, "<tr>$1</tr>")
              res = res.replace(/\[th\]([\s\S]*?)\[\/th\]/mig, "<th>$1</th>")
          }
          // [tbody][/tbody]
          if (/\[tbody\]([\s\S]*?)\[\/tbody\]/mig.test(str)) {
              // [tr][/tr]
              res = res.replace(/\[tr\]([\s\S]*?)\[\/tr\]/mig, "<tr>$1</tr>")
              res = res.replace(/\[td\]([\s\S]*?)\[\/td\]/mig, "<td>$1</td>")
              res = res.replace(/\[tbody\]([\s\S]*?)\[\/tbody\]/mig, "<tbody>$1</tbody>")
          }
          res = res.replace(/\[table\]([\s\S]*?)\[\/table\]/mig, "<table style=\"width: 100% \" class=\"post-table\">$1</table>")
          res = res.replace(/<br.*?>/gi, "")
          $(this).html(res.trim())
      }
  }
})