console.log("a =", a)
var a = 2 //efeito de hoisting (içar, jogar pra cima sem valor)
console.log('a =',a)

//exemplo com função
function teste(){
    console.log("a =", a)
var a = 2 //efeito de hoisting (içar, jogar pra cima sem valor)
console.log('a =',a)
}
teste()
console.log("a =", a)


//exemplo com let não funciona conforme o exemplo acima, somente como abaixo
let b = 3 
console.log("b =", b)
let c = 2 // let nao permite redeclarar
console.log('c =', c)