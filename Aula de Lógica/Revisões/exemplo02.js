function pares(numero) {
    if (numero <= 100) {
        // verificar se é par
        if (numero % 2 == 0) {
            soma = soma + numero
            cont++
        }
        numero++
        pares(numero)
    }
}


var soma = 0;
var cont = 0;
pares(0);
console.log(`A soma dos números pares é: ${soma}`)
console.log(`A quantidade é: ${cont}`)
console.log(`A média é: ${soma/cont}`)