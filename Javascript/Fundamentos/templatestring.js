const nome = 'Rebeca'
const concatenacao = "Olá "+ nome + "!"
console.log(concatenacao)
//template string permite interpolar e quebra de linha

const template = ` 
Olá
${nome}!`
console.log(template)

// expressões ....

console.log(`1 + 1 = ${1 + 1}`)

// aceita uso de funções dentro do template

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`)