//pessoa -> 123 -> {...} um aponta para o endereço e o endereço aponta para o objeto
const pessoa = {nome: "Joao"}
pessoa.nome = "Pedro"
console.log(pessoa)

// funciona pq ele nao altera a constante e sim o que tem dentro do objeto 

// pessoa -> 456 ->  {...} tentar alterar o endereço de memoria  de pessoa

/* pessoa = {nome: "Ana"} */

//nao alterou pq ele ja esta endereçada e nao pode ser alterada por outro objeto

Object.freeze(pessoa) //congelar o objeto pessoa nao podendo mexer mais nele
pessoa.nome = "Maria"
pessoa.end = "Rua ABC"
delete pessoa.nome
//nada funciona pq esta congelada

console.log(pessoa.nome)
//Nao vai alterar pq está congelada


const pessoaConstante = Object.freeze({nome: "Joao"})
pessoaConstante.nome = "Maria"
console.log(pessoaConstante)