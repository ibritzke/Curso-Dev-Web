const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in num) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${num[x]}`)
}

for(y in num){
    if(y == 5){
        continue
    }
    console.log(`${y} = ${num[y]}`)
}

externo: //rótulo do for
for(a in num){ //não é utilizado esse exemplo de break com rótulo
    for(b in num){
        if(a ==2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}
console.log("fim!")