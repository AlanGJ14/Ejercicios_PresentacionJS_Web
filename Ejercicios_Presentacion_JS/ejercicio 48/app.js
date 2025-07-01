const cont1 = document.querySelector("#cont1")
const cont2 = document.querySelector("#cont2")
const pares = []
let suma=0

    for (i=1; i<101; i++){
        i%2==0? pares.push(i):null
        suma+=i;
    }

    cont1.innerHTML += pares.join(", ")
    cont2.innerHTML += suma