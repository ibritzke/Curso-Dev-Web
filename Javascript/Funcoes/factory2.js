
// factory cada vez que chamar a função ela cria um objeto novo
function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto("Notebook", 2199,49))
console.log(criarProduto("Ipad", 1199,49))