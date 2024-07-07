function recursividade(valor){
    if (valor <= 3){
        soma = soma + valor
        valor++
        recursividade(valor)
    }
}


var soma = 0;

recursividade(1);
console.log(`O valor da soma é: ${soma}`)