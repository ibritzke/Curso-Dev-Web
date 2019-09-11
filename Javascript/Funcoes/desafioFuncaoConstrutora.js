//
class Pessoa { 

    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log("menu nome é: " + this.nome)
    }
} 

const p1 = new Pessoa('João')
p1.falar()


// funcao construtora factory
function Pessoa(nome) {
    this.nome = nome

    this.falar = function () {
        console.log("menu nome é: " + this.nome)
    }
}

const p1 = new Pessoa('João')
p1.falar()

