var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var numerodofunc = Number (lines[0])
var horasdetrabalho = Number (lines[1])
var valor = Number (lines[2])
var valor = (valor.toFixed(2))

var salario = (horasdetrabalho*valor)
var salario = (salario.toFixed(2))

console.log (`NUMBER = ${numerodofunc}
SALARY = U$ ${salario}`)