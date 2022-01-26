var mult = [
  ['Vienna',' ',' ',' ',' '],
  [' ','is',' ',' ',' '],
  [' ',' ','a',' ',' '],
  [' ',' ',' ','nice',' '],
  [' ',' ',' ',' ','city']
]

var sentence = [mult[0][0], mult[1][1], mult[2][2], mult[3][3], mult[4][4]]
console.table(sentence)
console.log(sentence.join(' '))


var line1 = mult[0][0] + '<br>'
var line2 = '&#8195;' + mult[1][1] + '<br>'
var line3 = '&#8195;' + '&#8195;' + mult[2][2] + '<br>'
var line4 = '&#8195;' + '&#8195;' + '&#8195;' + mult[3][3] + '<br>'
var line5 = '&#8195;' + '&#8195;' + '&#8195;' + '&#8195;' + mult[4][4] + '<br><br>'

document.write(line1 + line2 + line3 + line4 + line5)


var longsentence = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up."

var arr = new Array()
arr = longsentence.split('$').join(' ')
document.write(arr)