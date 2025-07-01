const boton = document.querySelector("button")

boton.addEventListener("click", function(){
    const num1 = document.querySelector("#numero1").value
    const num2 = document.querySelector("#numero2").value
    const resultado = document.querySelector("div")
    resultado.innerHTML = "Resultado: "
    let sumas = []
    for(i=0; i<num1; i++){
        sumas.push(num2)
    }
    resultado.innerHTML += `${sumas.join("+")} = ${num1*num2}`
})