var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var numero1 = Number (lines[0])
var numero2 = Number (lines[1])

 for (var cont = 0; numero2 > numero1; cont++) {
    if ((numero1%2)==0){
        console.log(`${numero1}`)  
       }
    numero1++
 }
