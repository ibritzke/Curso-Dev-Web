function Pessoa() {
    this.idade = 0

    const self = this //armazeno numa variavel self ao invez de usar o bind.
    //troco tambem abaixo para self ao invéz de this

    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)funciona com bind*/, 1000)//essa função vai rodar a função a cada 1000 mlsegundo
}

new Pessoa