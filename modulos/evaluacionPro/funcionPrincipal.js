
import { filtrarActivos, contarParticipantes, evaluarProyecto } from './funcionesEjer14.js';
// Función principal que integra todo
export function generarInforme(proyectos, callback) {
    const activos = filtrarActivos(proyectos);

    return activos.map(p => {
        const numParticipantes = contarParticipantes(p);
        const estado = evaluarProyecto(p, callback);

        return {
            nombre: p.nombre,
            participantes: numParticipantes,
            estado
        };
    });
}