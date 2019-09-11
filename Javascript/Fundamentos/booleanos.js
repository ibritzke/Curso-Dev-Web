let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //converte o numero para saber o valor dele igual a !!true
console.log(!isAtivo) // igual !true

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!! ' ') // string preenchida retorna verdadeiro mesmo sendo um espaco em branco
console.log(!!"Texto")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos')
console.log(!!0)
console.log(!!"") //string vazia retorna falso
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("Para finalizar")
console.log(!!("" || null || 0 || " ")) //igual a verdadeiro pq um desses é verdadeiro
console.log(("" || null || 0 || "Epa" || 123)) //retorna o unico valor verdadeiro da expressão

let nome = ""
console.log(nome || 'Desconhecido')
nome = 'Lucas'
console.log(nome || 'Desconhecido') 




