const contenedor1 = document.querySelector("#contenedor1")
const contenedor2 = document.querySelector("#contenedor2")
const pares = []
let suma=0
let i=1
while (i<101){
    i%2==0? pares.push(i):null
    suma+=i;
    i++;
}

contenedor1.innerHTML += pares.join(", ")
contenedor2.innerHTML += suma