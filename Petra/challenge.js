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


var longsentence = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up."

var arr = new Array()
arr = longsentence.split('$').join(' ')
document.write(arr)