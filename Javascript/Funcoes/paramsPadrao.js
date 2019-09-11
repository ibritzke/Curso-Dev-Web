// valor padrão do es2015
function soma(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma())
console.log(soma(3))
console.log(soma(1, 2, 3))
console.log(soma(0,0,0))


// exemplo mais comum
function soma1(a, b, c) {
    a = a || 1
    b = b || 1 //serve com qualquer valor string, number
    c = c || 1
    return a + b + c
}

console.log(soma1())
console.log(soma1(3))
console.log(soma1(1, 2, 3))
console.log(soma1(0,0,0))//erro
