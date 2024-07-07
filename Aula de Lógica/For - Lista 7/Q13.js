var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var numero = 1

for (var cont = 0; numero <= 5;) {
    cont = 0
           while (cont <= 10) {
            var tabuada = numero * cont
            console.log (numero + " * " + cont + "= " + tabuada)
            cont = cont + 1
        }
        numero++  
        console.log("<br>")
    }
