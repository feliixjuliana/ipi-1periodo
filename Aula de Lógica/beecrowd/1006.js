var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var nota1 = Number(lines[0])
var nota1 = (nota1.toFixed(1))
var nota2 = Number(lines[1])
var nota2 = (nota2.toFixed(1))
var nota3 = Number (lines[2])
var nota3 = (nota3.toFixed(1))

var pesoA = (nota1 * 2)
var pesoB = (nota2 * 3)
var pesoC = (nota3 * 5)
var somapeso = (2 + 3 + 5)

var media = (pesoA + pesoB + pesoC) / somapeso
var media = (media.toFixed(1))

console.log(`MEDIA = ${media}`)