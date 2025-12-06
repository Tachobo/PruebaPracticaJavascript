import promptSync from 'prompt-sync';
const prompt = promptSync();
import { analizarUsuarios } from '../modulos/alerta/index.js';

export function ejecutarEjercicio16() {
    console.log("\nSistema de alerta temprana\n");

    let cantidad = parseInt(prompt("¿Cuántos usuarios desea registrar?: "));
    let usuarios = [];

    for (let i = 1; i <= cantidad; i++) {
        console.log(`\nUsuario ${i}:`);
        let id = i;
        let nombre = prompt("Nombre del usuario: ");
        let numPublicaciones = parseInt(prompt("Número de publicaciones: "));
        let publicaciones = [];

        for (let j = 1; j <= numPublicaciones; j++) {
            publicaciones.push(prompt(`Publicación ${j} (escriba 'inapropiada' si lo es): `));
        }

        let numReportes = parseInt(prompt("Número de reportes: "));
        let reportes = [];
        for (let k = 1; k <= numReportes; k++) {
            reportes.push(prompt(`Reporte ${k}: `));
        }

        let fechaInput = prompt("Fecha de registro (DD/MM/YYYY): ");
        let [dia, mes, anio] = fechaInput.split("/").map(Number);
        let fechaRegistro = new Date(anio, mes - 1, dia); // mes - 1 porque en JS enero = 0

        let estado = prompt("Estado del usuario (activo/inactivo): ");

        usuarios.push({ id, nombre, publicaciones, reportes, fechaRegistro, estado });
    }

    // Callback de análisis de riesgo
    const criterioAnalisis = (usuario) => {
        let nivel = 0;
        let motivo = "Sin riesgo";
        let sospechoso = false;

        if (usuario.reportes.length > 5) {
            nivel = 3;
            motivo = "Más de 5 reportes";
            sospechoso = true;
        }

        if (usuario.publicaciones.some(p => p.toLowerCase().includes("inapropiada"))) {
            nivel = Math.max(nivel, 4);
            motivo = "Publicaciones inapropiadas";
            sospechoso = true;
        }

        const diasDesdeRegistro = (Date.now() - usuario.fechaRegistro.getTime()) / (1000 * 60 * 60 * 24);
        if (diasDesdeRegistro < 30 && usuario.reportes.length > 0) {
            nivel = Math.max(nivel, 5);
            motivo = "Usuario nuevo con reportes";
            sospechoso = true;
        }

        return { sospechoso, nivel, motivo };
    };

    const informe = analizarUsuarios(usuarios, criterioAnalisis);

    console.log("\nInforme de riesgo");
    console.log("\nBajo riesgo:");
    informe.bajo.forEach(u => console.log(`- ${u.nombre} | Motivo: ${u.motivo}`));

    console.log("\nMedio riesgo:");
    informe.medio.forEach(u => console.log(`- ${u.nombre} | Motivo: ${u.motivo}`));

    console.log("\nAlto riesgo:");
    informe.alto.forEach(u => console.log(`- ${u.nombre} | Motivo: ${u.motivo}`));
}
