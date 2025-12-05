let cantidad = parseInt(prompt("Ingrese la cantidad de notas a evaluar"));
let notas = [];

for (let i = 1; i <= cantidad; i++) {
    let nota = parseFloat(prompt(`Ingrese la nota ${i}`));
    notas.push(nota);
}

function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    let promedio = suma / notas.length;
    let rendimiento = "";

    if (promedio >= 4.0) {
        rendimiento = "Alto";
    } else if (promedio >= 3.0) {
        rendimiento = "Medio";
    } else {
        rendimiento = "Bajo";
    }

    return { promedio, rendimiento };
}

let resultado = calcularPromedio(notas);
console.log("Promedio final:", resultado.promedio.toFixed(2));
console.log("Rendimiento:", resultado.rendimiento);
