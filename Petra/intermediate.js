var cars = ['Tesla','Audi','Renault','Volvo','Mazda','Fiat','Ferrari']
console.table(cars)
console.log(cars.join(', '))
console.log(cars.sort().join(', '))

var fruit = ['apple','banana','kiwi']
fruit.push('orange')
console.log(fruit.join(', '))
fruit.pop()
console.log(fruit.join(', '))

var animals = ['monkey','horse','dog']
console.log(animals.join(', '))
console.log(animals.sort().join(', '))
animals.unshift('cat')
console.log(animals.join(', '))

var fruit2 = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon"
var temp = new Array()
temp = fruit2.split('/')
console.log(temp.join(', '))
document.write(temp.join('<br>'))