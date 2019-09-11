const pessoa = {
    saudacao: "Bom dia!",
    falar(){//metodo novo de fazer uma função
        console.log(this.saudacao) //tem que colocar o this para funcionar para ele pegar fora do bloco
    }
}

pessoa.falar()

const falarDePessoa = pessoa.falar.bind(pessoa)//significa que sempre o this sera resolvido para pessoa
falarDePessoa() //bind é responsável por amarar o metodo, o this sera sempre o que for passado dentro de bind