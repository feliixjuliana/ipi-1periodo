var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var notaA = Number (lines[0])
var notaB = Number (lines [1])
var notaC = Number (lines[2])
var notaD = Number (lines[3])

var diferença = (notaA*notaB) - (notaC*notaD)

console.log (`DIFERENCA = ${diferença}`)