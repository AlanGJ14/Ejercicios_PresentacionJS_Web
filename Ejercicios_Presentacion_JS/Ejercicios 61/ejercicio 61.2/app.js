const boton = document.querySelector("button")

boton.addEventListener("click", function(){
    const num = document.querySelector("input").value

    if(isNaN(num)){
        resultado.textContent = "Ingrese un número .";
        return;
    }
    const resultado = document.querySelector("div")
    let tabla = `<h4>Tabla del ${numero}</h4>`
    for(i=1; i<= 10; i++){
        tabla += `${numero} x ${i} = ${numero * i}<br>`;
    }

    resultado.innerHTML = tabla;
})