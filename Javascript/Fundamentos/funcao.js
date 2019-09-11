//funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}
imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(5, 5, 4, 5, 6, 7, 8) //ignora os demais numeros sem erro //flexibilidade da linguagem fracamente tipada
imprimirSoma()


//Função com retorno 
function soma(a, b = 1){//b = 1 é o valor padrão de b
    return a + b
}
soma(2, 3) //nao aparece nada
console.log(soma(2, 3))
console.log(soma(2)) // retorna 2 pq o padrão de b = 1

/* Geralmente quando atribuímos uma função à uma variável essa variável é uma const. Isso pode ser utilizado para que a função não possa ser sobrescrita durante seu código, por exemplo, caso você crie a função naturalmente você pode recriar essa função mais na frente no seu código e isso vai substituir a função criada anteriormente. Já se você fizer a atribuição da sua função numa const, isso não será possível, assim sua função vai estar mais segura, de certa forma.

Outra coisa importante é o conceito de Hoisting, isso é uma das propriedades do JavaScript e o que isso significa é que as funções e variáveis são levadas ao topo do código quando ele é executado. Vou exemplificar aqui pra você entender melhor:

function teste() {
    console.log('Teste número 1')
}
 
teste()
 
function teste() {
    console.log('Teste número 2')
}
 
teste()
Note que ao executar esse código o resultado das duas chamadas das funções é o console.log() da segunda função criada. Ela sobrescreveu a primeira função. Agora outro exemplo:

const teste = function() {
    console.log('Teste número 1')
}
 
teste()
 
const teste = function() {
    console.log('Teste número 2')
}
 
teste()
Nesse exemplo eu atribui a função à uma const, dessa forma o código vai gerar um erro, por que a const não impedir que a função seja sobrescrita.
*/
