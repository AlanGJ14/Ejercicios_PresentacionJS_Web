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
        let suma = 0;

        for (let i = 0; i < lista.length; i++) {
            suma +=  lista[i];
        }
        const media = suma / lista.length;
        resultado.textContent = `La media es: ${media}`;
        
    } catch (error) {
        resultado.textContent = "Formato inválido. Escribe la lista como [1,2,3]";
    }
});
