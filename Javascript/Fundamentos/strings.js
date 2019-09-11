const escola = "cod3r"

console.log(escola.charAt(4)) // retorna R
console.log(escola.charAt(5)) // nao achou mas nao tem erro retorna vazio //js nao apresenta tantos erros
console.log(escola.charCodeAt(3)) //valor da tabela unicode 51
console.log(escola.indexOf('3'))

console.log(escola.substring(1)) // vai do indice 1 ate o final
console.log(escola.substring(0,3)) //vai do indice 0 e me de 3 caracteres

console.log('Escola '.concat(escola).concat("!")) // concatenar com .concat()
console.log('Escola ' + escola + "!") // concatenar com +
console.log("3" + 2) // concatena pq o primeiro é string = 32


console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e')) //regex 
console.log(escola.replace(/\w/, 'e')) // c por e
console.log(escola.replace(/\w/g, 'e')) // tudo por e
console.log(escola)

console.log('Ana,Maria,Pedro'.split(',')) //converter string em array
console.log('Ana,Maria,Pedro'.split(/,/)) //converter string em array com regex


