let func = require('./funcoes')
let tipo = require('./tipos')
console.log(func.somar(10, 20))
console.log(func.subtrair(10, 20))
console.log(global.y) //Global escope = undefined (without require)

console.log(tipo.type(10))

console.log("Higher Order Function:")
console.log(func.map((a, b) => a + b , [ 1, 2, 3, 4, 5 ]))