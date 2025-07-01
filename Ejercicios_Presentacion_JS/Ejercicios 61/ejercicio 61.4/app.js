const boton = document.querySelector("#calcular");

boton.addEventListener("click", function() {
    const entrada = document.querySelector("#lista").value;
    const resultado = document.querySelector("#resultado");

    try {
        const lista = JSON.parse(entrada);
        if (!Array.isArray(lista)) {
            resultado.textContent = "Por favor ingresa una lista válida como [1,2,3]";
            return;
        }
        let mayor = lista[0];

        for (let i = 1; i < lista.length; i++) {
            if (lista[i] > mayor) {
                mayor = lista[i];
            }
        }
        resultado.textContent = `El número mayor es: ${mayor}`;
        
    } catch (error) {
        resultado.textContent = "Formato inválido. Escribe la lista como [1,2,3]";
    }
});
