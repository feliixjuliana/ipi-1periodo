var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var nota1 = Number(lines[0])
var nota1 = (nota1.toFixed(1))
var nota2 = Number(lines[1])
var nota2 = (nota2.toFixed(1))

var pesoA = (nota1 * 3.5)
var pesoB = (nota2 * 7.5)
var somapeso = (3.5 + 7.5)

var media = (pesoA + pesoB) / somapeso
var media = (media.toFixed(5))

console.log(`MEDIA = ${media}`)