const boton = document.querySelector("button")

boton.addEventListener("click", function(){
    const numeros = document.querySelector("input").value

    const arreglo = numeros.split(",").map(num => Number(num.trim()));

    if(arreglo.some(isNaN)){
        alert("Hay algún valor que no es un número.")
        return;
    }

    let arreglo2 = arreglo.sort((a,b)=> a-b)

    document.querySelector("div").textContent="Resultado: " + arreglo2
})

