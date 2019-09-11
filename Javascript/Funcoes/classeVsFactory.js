class Pessoa { //no browser nao funciona

    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log("menu nome é: " + this.nome)
    }
} 

const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome =>{
    return{
        falar: () => console.log("menu nome é: " + nome)
    }
}
const p2 = criarPessoa('Joao')
p2.falar()