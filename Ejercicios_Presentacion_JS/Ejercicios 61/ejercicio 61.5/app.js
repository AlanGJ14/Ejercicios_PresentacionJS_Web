const boton = document.querySelector("#sumar");

boton.addEventListener("click", function() {
    const entrada1 = document.querySelector("#vector1").value;
    const entrada2 = document.querySelector("#vector2").value;
    const resultado = document.querySelector("#resultado");

    try {
        const vector1 = JSON.parse(entrada1);
        const vector2 = JSON.parse(entrada2);

        if (!Array.isArray(vector1) || !Array.isArray(vector2)) {
            resultado.textContent = "Ingresa los vectores en formato [1,2,3]";
            return;
        }

        if (vector1.length !== vector2.length) {
            resultado.textContent = "Los vectores deben tener la misma longitud.";
            return;
        }

        const sonNumeros1 = vector1.every(item => typeof item === 'number');
        const sonNumeros2 = vector2.every(item => typeof item === 'number');

        if (!sonNumeros1 || !sonNumeros2) {
            resultado.textContent = "Todos los elementos deben ser números.";
            return;
        }

        const suma = [];
        for (let i = 0; i < vector1.length; i++) {
            suma.push(vector1[i] + vector2[i]);
        }

        resultado.textContent = `Resultado: [${suma.join(", ")}]`;

    } catch (error) {
        resultado.textContent = "Formato inválido. Escribe los vectores como [1,2,3]";
    }
});
