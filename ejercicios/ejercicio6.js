import promptSync from 'prompt-sync';
import { calcularSalarioBase, calcularDeducciones, calcularNeto  } from '../modulos/nomina/index.js';

const prompt = promptSync();

export function ejecutarEjercicio6(){
    console.log("\nNomina\n");
    const valorHora = parseInt(prompt("Ingrese el valor de la hora: "));

    const horas = parseInt(prompt("Ingrese las horas trabajadas: "));

    const base = calcularSalarioBase(horas, valorHora);

    const deducciones = calcularDeducciones(base);

    const neto = calcularNeto(base, deducciones);

    console.log(`
    El salario base es: ${base}
    El total deducciones es: ${deducciones}
    El salario neto es: ${neto}
    `);
}