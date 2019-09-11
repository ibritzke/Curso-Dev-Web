const peso1 = 1.0
const peso2 = Number('2.1')

console.log(peso1, peso2)

console.log(Number.isInteger(peso1)) // determina se é inteiro ou não
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1+peso2)

console.log(media)
console.log(media.toFixed(2)) //determina casas decimais
console.log(total)
console.log(media.toString()) // converte para string
console.log(typeof media) //tipo de dado
console.log(typeof Number) //tipo 


//cuidados com números
console.log(7/0)
console.log("10" / 2)
console.log("10,2" / 2)
console.log("10.2" / 2)
console.log("show!" * 2)
console.log(0.1 + 0,7)
console.log(0.1 + 0.7)
console.log(0,1 + 0,7)
console.log((10.345).toFixed(2))
console.log('3' + 2) // ao invez de somar ele vai concatenar



