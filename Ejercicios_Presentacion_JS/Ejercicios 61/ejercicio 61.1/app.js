const botonVerificar = document.querySelector("button");

botonVerificar.addEventListener("click", function() {
    const num = Number(document.querySelector("input").value)

    const resultado = document.querySelector("#resultado");
    if (num%2== 0) {
        resultado.textContent = "Es par";
    } else {
            resultado.textContent = "Es impar";
    }
});
