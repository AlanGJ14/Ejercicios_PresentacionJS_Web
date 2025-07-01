const boton = document.querySelector("#generar");

boton.addEventListener("click", function() {
    const nombre = document.querySelector("#nombre").value.trim().toUpperCase();
    const paterno = document.querySelector("#paterno").value.trim().toUpperCase();
    const materno = document.querySelector("#materno").value.trim().toUpperCase();
    const fecha = document.querySelector("#fecha").value;
    const sexo = document.querySelector("#sexo").value.toUpperCase();
    const estado = document.querySelector("#estado").value.toUpperCase();

    const resultado = document.querySelector("#resultado");

    if (!nombre || !paterno || !materno || !fecha || !sexo || !estado) {
        resultado.textContent = "Por favor, llena todos los campos.";
        return;
    }

    // Funciones auxiliares
    function primeraVocalInterna(palabra) {
        const vocales = palabra.slice(1).match(/[AEIOU]/);
        return vocales ? vocales[0] : 'X';
    }

    function primeraConsonanteInterna(palabra) {
        const consonantes = palabra.slice(1).match(/[BCDFGHJKLMNPQRSTVWXYZ]/);
        return consonantes ? consonantes[0] : 'X';
    }

    function obtenerInicialNombre(nombre) {
        const nombres = nombre.split(' ');
        const comunes = ['JOSE', 'JOSÉ', 'MARIA', 'MARÍA', 'MA', 'J'];
        return (nombres.length > 1 && comunes.includes(nombres[0])) ? nombres[1][0] : nombres[0][0];
    }

    // Formatear fecha
    const año = fecha.slice(2, 4);
    const mes = fecha.slice(5, 7);
    const dia = fecha.slice(8, 10);

    // Construir CURP
    const curp = 
        paterno[0] +
        primeraVocalInterna(paterno) +
        (materno ? materno[0] : 'X') +
        obtenerInicialNombre(nombre) +
        año + mes + dia +
        sexo[0] +
        estado +
        primeraConsonanteInterna(paterno) +
        primeraConsonanteInterna(materno) +
        primeraConsonanteInterna(nombre) +
        '00'; // Homoclave simplificada

    resultado.textContent = `Tu CURP es: ${curp}`;
});