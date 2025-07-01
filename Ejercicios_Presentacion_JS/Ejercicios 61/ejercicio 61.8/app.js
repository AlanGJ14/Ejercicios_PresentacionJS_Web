const boton = document.querySelector("button")

boton.addEventListener("click", function(){
    const texto = document.querySelector("textarea").value
    const mayusculas = texto.toUpperCase()
    const minusculas = texto.toLowerCase()
    const arr = texto.split(" ")

    const respuesta = document.querySelector("div")
    respuesta.innerHTML += "Longitud: " + arr.length
    respuesta.innerHTML += "<br>" + "<br>" + "Texto en mayúsculas:" + "<br>" + "<br>" + mayusculas
    respuesta.innerHTML += "<br>" + "<br>" + "Texto en minúsculas:" + "<br>" + "<br>" + minusculas
})