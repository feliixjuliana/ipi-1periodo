//entre 0 e 200 o maior numero divisivel por 2 e 3 ao mesmo tempo
function resultado(numero){
    if(numero <= 200){
        if(numero % 2 == 0 && numero % 3 == 0){
            maior = numero
        }
        numero ++
        resultado(numero)
    }
}



var maior = 0
resultado(0)
console.log(maior)