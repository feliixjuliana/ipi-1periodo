var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var nome = (lines[0])
var salario = Number(lines[1])
var totaldevendas = Number(lines[2])


var porcentagem = (totaldevendas*15)/100
var salariototal = (salario + porcentagem)

console.log (`TOTAL = R$ ${salariototal.toFixed(2)}`)