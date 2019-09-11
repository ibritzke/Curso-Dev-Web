//laços de repetição

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')

// teste abaixo mostrando a função getNumeroAleatorioEntre(min, max)

function getNumeroAleatorioEntre(min, max) {
    var intervalo = 0
    var aleatorio = Math.random() // gera um numero aleatorio e armazena na variável (aleatório)
    console.log(aleatorio); //imprime no console o numero gerado

    var resultado = aleatorio * (max - min) //numero aleatório x o resultado de (numero maximo - numero minimo)
    console.log(resultado); //imprime no console o numero gerado

    var resultadoComDeslocamento = intervalo + min
    console.log(resultadoComDeslocamento);
}

getNumeroAleatorioEntre(5, 10)



/* Primeiramente, precisamos destacar a a ordem de precedência das operações matemáticas. Observe esse trecho:

var aleatorio = Math.random() * (max - min) + min
A primeira operação que irá acontecer é a multiplicação de Math.random() pelo resultado do que está dentro do parêntesis e somente depois que o resultado será somado ao valor de min tranquilo?



Tendo isso em mente, sigamos em frente! Vamos dividir esse código em partes, da seguinte forma:

function  getNumeroAleatorioEntre(min, max) {

    var aleatorio = Math.random()
    console.log(aleatorio);

    var resultado = aleatorio * (max - min)
    console.log(resultado);

    var resultadoComDeslocamento = intervalo + min
    console.log(resultadoComDeslocamento);
}

getNumeroAleatorioEntre(5,10)
Em um primeiro momento, armazenamos o valor aleatorio decimal em uma variável chamad aleatorio,
 vamos supor para esse exemplo que o valor foi 0.8355... 
 Em seguida multiplicamos o valor de aleatorio pela subtração de max e min. Ou seja,



0.8355 * (10 - 5) = 4.1776...



Como você pôde ver,  4.1776 está abaixo do intervalo que estipulamos (no caso entre 5 e  10),
por isso que logo em seguida somamos com o valor de min, para assim, gerar o deslocamento e consequentemente o valor entre 5 e 10 aleatório que queríamos!



Em resumo, esse processo é dividido em 3 partes:

1 - Gerar um número aleatório decimal

2 - Multiplicar por um número inteiro

3 - Somar para gerar o deslocamento e garantir que o número sempre estará entre o intervalo pedido! */