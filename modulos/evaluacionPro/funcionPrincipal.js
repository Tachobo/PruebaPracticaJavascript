/* Se importan las funciones que se usan para filtrar y analizar los proyectos */
import { filtrarActivos, contarParticipantes, evaluarProyecto } from './funcionesEjer14.js';

/* Función principal que recibe la lista de proyectos y una función callback,
se encarga de generar un informe con los proyectos activos */
export function generarInforme(proyectos, callback) {

    /* Primero se filtran solo los proyectos que están activos para trabajar
    únicamente con los que están en funcionamiento */
    const activos = filtrarActivos(proyectos);

    /* Se usa map para recorrer cada proyecto activo y crear una nueva lista
    con la información resumida */
    return activos.map(p => {

        /* Se cuenta cuántos participantes tiene el proyecto usando la función
        de apoyo que ya fue importada */
        const numParticipantes = contarParticipantes(p);

        /* Se evalúa el proyecto usando la función evaluarProyecto, enviando el
        callback para que se aplique la regla de evaluación definida fuera */
        const estado = evaluarProyecto(p, callback);

        /* Se devuelve un nuevo objeto con solo los datos necesarios para el informe */
        return {
            nombre: p.nombre,
            participantes: numParticipantes,
            estado
        };
    });
}
