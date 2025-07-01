const botonComparar = document.querySelector("#comparar");

botonComparar.addEventListener("click", function() {
    const num1 = parseFloat(document.querySelector("#num1").value);
    const num2 = parseFloat(document.querySelector("#num2").value);
    const num3 = parseFloat(document.querySelector("#num3").value);

    const resultado = document.querySelector("#resultado");

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        resultado.textContent = "Ingresa los tres números.";
        return;
    }

    if (num1 > num2 && num1 > num3) {
        resultado.textContent = "El "+num1+" es mayor";
    } else if (num2 > num1 && num2 > num3) {
        resultado.textContent = "El "+num2+" es mayor";
    } else if (num3 > num1 && num3 > num2) {
        resultado.textContent = "El "+num3+" es mayor";
    } else {
        resultado.textContent = "Hay números iguales.";
    }
});
