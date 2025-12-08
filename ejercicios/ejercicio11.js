// Se importa la librería prompt-sync para poder capturar datos por consola
import promptSync from 'prompt-sync';
const prompt = promptSync();

// Se importa la función generarResumen desde el módulo de resumen
import { generarResumen } from '../modulos/resumen/index.js';

/* Función principal que se exporta para ser usada desde app.js, se encarga
de pedir los datos del mensaje, crear el objeto y mostrar el resumen */
export function ejecutarEjercicio11() {
    console.log("\nResumen de mensajes\n");

    /* Se pide al usuario el remitente, el contenido y la fecha del mensaje,
    estos datos se guardan en variables para usarlos después */
    let remitente = prompt("Ingrese el remitente: ");
    let contenido = prompt("Ingrese el contenido del mensaje: ");
    let fecha = prompt("Ingrese la fecha del mensaje: ");

    /* Se crea un objeto llamado mensaje donde se agrupan todos los datos del
    mensaje para poder enviarlos completos a la función que genera el resumen */
    const mensaje = { remitente, contenido, fecha };

    /* Se llama a la función generarResumen y se le envía el objeto mensaje,
    esta función se encarga de organizar la información y devolver un nuevo objeto
    con los datos listos para mostrar */
    const resumen = generarResumen(mensaje);

    /* Se muestran en consola los datos del resumen usando las propiedades del
    objeto con la notación de punto */
    console.log(`\n
    Resumen
    Remitente: ${resumen.remitente}
    Contenido: ${resumen.contenido}
    Fecha: ${resumen.fecha}`);
}
