console.log(soma(3,4)) //posso chamar antes, pois o interpretador do js chama primeiro as funções depois executa o codigo

//console.log(sub(3,4)) 
//Não funciona nesse casso pois é uma function expression
//Não funciona pois é named function expression.
//Estes dois tipos precisam ser chamar depois de declarar a função.


// function declaration
function soma(x,y){
    return x + y
}

//function expression
const sub = function (x,y){
    return x - y
}

//named function expression
const mult = function mult(x,y){ //aparece o nome da função no debug mas pouco usada
    return x * y
}
