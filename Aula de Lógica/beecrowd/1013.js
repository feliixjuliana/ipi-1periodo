var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var primeiralinha = lines[0]
var itensdaprimeiralinha = primeiralinha.split(' ')
var num1 = Number (itensdaprimeiralinha[0])
var num2 = Number (itensdaprimeiralinha[1])
var num3 = Number (itensdaprimeiralinha[2])

if ((num1>=num2) && (num1>=num3)) {
    var maior = num1
} else if ((num2>=num1) && (num2>=num3)){
    var maior = num2
} else if ((num3>=num1) && (num3>=num2)){
    var maior = num3
}

console.log (`${maior} eh o maior`)