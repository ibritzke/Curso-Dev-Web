//usando notação literal

const obj1 = {}
console.log(obj1)

//object em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//funcoes construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
    this.preco = preco
    this.desc = desc
}

const p1 = new Produto("Notebook", 1550, 0.10)
console.log(p1.desc)
console.log(p1.getPrecoComDesconto())

//Função Factory - padrao de projeto funcao que fabria algo
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario("Maria", 11400, 1)
console.log(f1, f1.nome, f1.getSalario(), f2.getSalario())


// Object.create

const filha = Object.create(null)
filha.nome = "Ana"
console.log(filha)


//Uma função famosa que retorna um Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)

