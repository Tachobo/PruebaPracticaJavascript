// Se importa la librería prompt-sync para poder capturar datos por consola
import promptSync from 'prompt-sync';
const prompt = promptSync();

// Se importa la función analizarGastos desde el módulo de control
import { analizarGastos } from '../modulos/control/index.js';

/* Función principal que se exporta para ser usada desde app.js, se encarga
de registrar los gastos del usuario y mostrar un reporte financiero */
export function ejecutarEjercicio13() {
    console.clear();
    console.log("\nControl de gastos y análisis financiero\n");

    /* Se pide al usuario cuántos gastos desea registrar y se guarda el valor
    para controlar cuántas veces se repetirá el ciclo */
    let cantidad = parseInt(prompt("¿Cuántos gastos desea registrar?: "));

    // Se crea un arreglo vacío donde se guardarán los gastos
    let gastos = [];

    /* Se usa un ciclo for para pedir los datos de cada gasto, se solicita la
    categoría y el monto, y se guardan en un objeto dentro del arreglo */
    for (let i = 1; i <= cantidad; i++) {
        console.log(`\nGasto ${i}:`);
        let categoria = prompt("Categoría: ");
        let monto = parseFloat(prompt("Monto: "));
        gastos.push({ categoria, monto });
    }

    /* Se llama a la función analizarGastos y se le envía el arreglo de gastos,
    esta función se encarga de calcular el total, detectar la categoría más costosa
    y generar las alertas si existen */
    const reporte = analizarGastos(gastos);

    // Se muestran los resultados del reporte en consola
    console.log("\nReporte financiero");
    console.log(`Total gastado: ${reporte.total}`);
    console.log(`Categoría más costosa: ${reporte.categoriaMasCostosa}`);

/* Se valida si el arreglo de alertas tiene información, se usa .length para
saber cuántas alertas hay, si es mayor que cero significa que hay alertas
y se deben mostrar en pantalla */
if (reporte.alertas.length > 0) {
    console.log("Alertas:");

    /* Se usa forEach para recorrer todas las alertas del arreglo, este método toma
    cada alerta una por una y ejecuta la función interna, lo que se hace aquí es
    imprimir cada alerta en consola */
    reporte.alertas.forEach(a => console.log("- " + a));
} else {
    // Si no hay alertas, se muestra un mensaje indicando que todo está en orden
    console.log("No hay desbalances financieros detectados.");
}

}