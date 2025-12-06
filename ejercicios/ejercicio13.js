import promptSync from 'prompt-sync';
const prompt = promptSync();

import { analizarGastos } from '../modulos/control/index.js';

export function ejecutarEjercicio13() {
    console.clear();
    console.log("\nControl de gastos y análisis financiero\n");

    let cantidad = parseInt(prompt("¿Cuántos gastos desea registrar?: "));
    let gastos = [];

    for (let i = 1; i <= cantidad; i++) {
        console.log(`\nGasto ${i}:`);
        let categoria = prompt("Categoría: ");
        let monto = parseFloat(prompt("Monto: "));
        gastos.push({ categoria, monto });
    }

    const reporte = analizarGastos(gastos);

    console.log("\nReporte financiero");
    console.log(`Total gastado: ${reporte.total}`);
    console.log(`Categoría más costosa: ${reporte.categoriaMasCostosa}`);
    if (reporte.alertas.length > 0) {
        console.log("Alertas:");
        reporte.alertas.forEach(a => console.log("- " + a));
    } else {
        console.log("No hay desbalances financieros detectados.");
    }
}