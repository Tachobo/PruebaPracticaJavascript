// Filtrar proyectos activos
export function filtrarActivos(proyectos) {
    return proyectos.filter(p => p.activo);
}

// Contar participantes de un proyecto
export function contarParticipantes(proyecto) {
    return proyecto.participantes.length;
}

// Evaluar proyecto con un callback
export function evaluarProyecto(proyecto, callback) {
    return callback(proyecto);
}
