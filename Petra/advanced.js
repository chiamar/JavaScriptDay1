var a = 7;
var b = 14;
var c = "21";
var d = '36';
var e = 42;
var sum = a + b + Number(c) + Number(d) + e
console.log(sum)

var f = '1';
var g = 15;
var h = 8;
var i = "1";
var prod = Number(f) * g * h * Number(i)
console.log(prod)

document.write(sum/prod)

var multi = [ 
  [1, 2, 1, 24], 
  [8, 11, 9, 4], 
  [7, 0, 7, 27], 
  [7, 4, 28, 14], 
  [3, 10, 25, 7], 
  [21, 4, 6, 17], 
  [3, 5, 26, 3]
]
// Output 11, 25, 17, 27, 0
num1 = multi[1][1]
num2 = multi[4][2]
num3 = multi[5][3]
num4 = multi[2][3]
num5 = multi[2][1]

console.log(num1,num2,num3,num4,num5)