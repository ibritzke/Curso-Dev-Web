function getPreco(imposto = 0, moeda = "R$"){
    return `${moeda} ${this.preco * (1- this.desc) * (1 + imposto)}`
}
const produto = {
    nome: "notebook",
    preco: 4589,
    desc: 0.15,
    getPreco
}
global.preco = 20
global.desc = 0.1
console.log(getPreco()) //so funciona no escopo global

console.log(produto.getPreco()) //funciona sem global

const carro = { preco: 49999, desc: 0.20}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, "$"))//no CALL passei outros parametros diretamente dentro da função
console.log(getPreco.apply(carro,[0.17, "$"])) // no APPLY alterei os parametros mas tem que estar dentro de um array
console.log(getPreco.apply(global,[0.17, "$"])) // no APPLY alterei os parametros mas tem que estar dentro de um array