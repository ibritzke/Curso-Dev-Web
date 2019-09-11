// IIFE -> immediately invoked Function Expression
// serve para fugir do escopo global

(function(){ //função anonima
    console.log("Sera executado na hora!")
    console.log("Foge do escopo mais abrangente!")
})()
