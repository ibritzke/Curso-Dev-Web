Number.prototype.entre = function (inicio, fim) { //função comparativa onde solicita dois valores inicio e fim
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) { // estou chamando a função acima e atribuindo os valores de inicio e fim
        console.log('Quadro de Honra') // como tambem poderia colocar em cada if(nota >= 9 && nota <= 10){
    } else if (nota.entre(7, 8.99)) { //if(nota >= 7 && nota <= 8.99)
        console.log('Aprovado')
    }else if (nota.entre(4,6.99)) {////if(nota >= 4 && nota <= 6.99)
        console.log('Recuperação')
   } else if(nota.entre(0,3.99)){
       console.log('Reprovado')
   }  else{
       console.log("Nota Inválida!")
   }
   
}
imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)
//imprimirResultado('Epa...')

//exemplo evitando algum erro de string
const imprimirResultado = function(nota) {
    if(nota >= 7){
        console.log("Você foi aprovado")
    }else{
        if(typeof nota === "string"){
            console.log("você passou uma string! Tente de novo!")
        }else{
            console.log("Você foi reprovado")
        }
        
    }
}
 
imprimirResultado(10)
imprimirResultado(5)
imprimirResultado("oi")