import promptSync from 'prompt-sync';
const prompt = promptSync();
import { generarResumen } from '../modulos/resumen/index.js';

export function ejecutarEjercicio11() {
    console.log("\nResumen de mensajes\n");

    let remitente = prompt("Ingrese el remitente: ");
    let contenido = prompt("Ingrese el contenido del mensaje: ");
    let fecha = prompt("Ingrese la fecha del mensaje: ");

    const mensaje = { remitente, contenido, fecha };

    const resumen = generarResumen(mensaje);

    console.log(`\n
    Resumen
    Remitente: ${resumen.remitente}
    Contenido: ${resumen.contenido}
    Fecha: ${resumen.fecha}`);
}
