function boletin(nota) {
    if (nota >= 7) {
        console.log('aprovado com ' + nota);
    }
    else {
        console.log('reprovado');
    }
}

nota1 = 10;
nota2 = 7;
nota3 = 5;
nota=((nota1+nota2+nota3)/3);

console.log(nota);
boletin(nota);


function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade...' + valor)
    }
}
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(" ")
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})