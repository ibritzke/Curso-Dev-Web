const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}
imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {//funcção dentro de função
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)//funcao arow


const pessoa = {
    falar: function () { //pode ser tambem escrito sem a palavra function //falar()
        console.log("Opa!")
    }
}

pessoa.falar()