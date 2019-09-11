function teste1(num) {
    if (num > 7) //metodo sem chaves
        console.log(num)

    console.log('Final')
}
teste1(6) //vai imprimir somente ('Final') o numero não pois é menor que 7
teste1(8) //vai imprimir as duas (8 e Final)


function teste2(num) {
    if (num > 7); { //(cuidado com o ;, nao usar com as estruturas de controle o erro ocorreu pois tem o ;)
        console.log(num)
    }
}

teste2(6)
teste2(8)
