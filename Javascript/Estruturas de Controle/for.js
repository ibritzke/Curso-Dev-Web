let contador = 1

while (contador <= 10) {
    console.log("contador = " + contador)
    contador++
}

let contador2 = 1
while (contador2 <= 10) {
    console.log(`contador = ${contador2}`)
    contador2++
}

for (let i = 1; i <= 10; i++) { //contador
    console.log(`i = ${i}`)
}


const notas=[6.7, 7.4, 9.8, 8.1, 7.7] //exemplo util mostrando como verificar as notas em um array.
for(i=0; i <notas.length; i++){ //esse exemplo o i esta sem o tipo determinado de variável (let) com isso o i fica visivel externo ao for.
    console.log(`notas = ${notas[i]}`) // se tiver o (let = i) o i não fica visível fora do for.
}