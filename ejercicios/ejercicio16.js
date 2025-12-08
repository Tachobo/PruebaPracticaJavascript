// Se importa la librería prompt-sync para poder capturar datos por consola
import promptSync from 'prompt-sync';
const prompt = promptSync();

// Se importa la función analizarUsuarios desde el módulo de alerta
import { analizarUsuarios } from '../modulos/alerta/index.js';

/* Función principal que se exporta para ser usada desde app.js, se encarga de
registrar los usuarios y generar un informe de riesgo */
export function ejecutarEjercicio16() {
    console.log("\nSistema de alerta temprana\n");

    /* Se pide la cantidad de usuarios que se van a registrar y se guarda para
    controlar cuántas veces se repetirá el ciclo */
    let cantidad = parseInt(prompt("¿Cuántos usuarios desea registrar?: "));
    let usuarios = [];

    /* Ciclo que se repite según la cantidad de usuarios para capturar toda la
    información de cada uno */
    for (let i = 1; i <= cantidad; i++) {
        console.log(`\nUsuario ${i}:`);

        // Se asigna un id automático usando el número del ciclo
        let id = i;

        // Se piden los datos básicos del usuario
        let nombre = prompt("Nombre del usuario: ");
        let numPublicaciones = parseInt(prompt("Número de publicaciones: "));
        let publicaciones = [];

        /* Se usa un ciclo interno para guardar cada publicación del usuario */
        for (let j = 1; j <= numPublicaciones; j++) {
            publicaciones.push(prompt(`Publicación ${j} (escriba 'inapropiada' si lo es): `));
        }

        let numReportes = parseInt(prompt("Número de reportes: "));
        let reportes = [];

        /* Ciclo para almacenar los reportes del usuario */
        for (let k = 1; k <= numReportes; k++) {
            reportes.push(prompt(`Reporte ${k}: `));
        }

        /* Se pide la fecha y se convierte a objeto Date para poder hacer cálculos
        con los días de registro */
        let fechaInput = prompt("Fecha de registro (DD/MM/YYYY): ");
        let [dia, mes, anio] = fechaInput.split("/").map(Number);
        let fechaRegistro = new Date(anio, mes - 1, dia);

        // Se pide el estado del usuario
        let estado = prompt("Estado del usuario (activo/inactivo): ");

        // Se guarda toda la información del usuario en el arreglo
        usuarios.push({ id, nombre, publicaciones, reportes, fechaRegistro, estado });
    }

    /* Se crea una función que se usará como callback para analizar el riesgo,
    esta función recibe un usuario y calcula si es sospechoso o no, y el nivel de riesgo */
    const criterioAnalisis = (usuario) => {
        let nivel = 0;
        let motivo = "Sin riesgo";
        let sospechoso = false;

        /* Se valida si el usuario tiene muchos reportes y se ajusta el nivel */
        if (usuario.reportes.length > 5) {
            nivel = 3;
            motivo = "Más de 5 reportes";
            sospechoso = true;
        }

        /* Se revisa si alguna publicación contiene la palabra inapropiada usando some,
        este método revisa cada publicación y devuelve true si encuentra una coincidencia */
        if (usuario.publicaciones.some(p => p.toLowerCase().includes("inapropiada"))) {
            nivel = Math.max(nivel, 4);
            motivo = "Publicaciones inapropiadas";
            sospechoso = true;
        }

        /* Se calcula cuántos días han pasado desde la fecha de registro para detectar
        usuarios nuevos con reportes */
        const diasDesdeRegistro = (Date.now() - usuario.fechaRegistro.getTime()) / (1000 * 60 * 60 * 24);
        if (diasDesdeRegistro < 30 && usuario.reportes.length > 0) {
            nivel = Math.max(nivel, 5);
            motivo = "Usuario nuevo con reportes";
            sospechoso = true;
        }

        // Se devuelve el resultado del análisis
        return { sospechoso, nivel, motivo };
    };

    /* Se llama a la función analizarUsuarios enviando los usuarios y el callback,
    esta función se encarga de agruparlos según su nivel de riesgo */
    const informe = analizarUsuarios(usuarios, criterioAnalisis);

    // Se muestran los resultados en consola
    console.log("\nInforme de riesgo");

    /* Se recorren las listas de bajo, medio y alto riesgo usando forEach para
    mostrar los nombres y los motivos */
    console.log("\nBajo riesgo:");
    informe.bajo.forEach(u => console.log(`- ${u.nombre} | Motivo: ${u.motivo}`));

    console.log("\nMedio riesgo:");
    informe.medio.forEach(u => console.log(`- ${u.nombre} | Motivo: ${u.motivo}`));

    console.log("\nAlto riesgo:");
    informe.alto.forEach(u => console.log(`- ${u.nombre} | Motivo: ${u.motivo}`));
}
