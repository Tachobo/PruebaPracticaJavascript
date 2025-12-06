export function generarRecomendaciones(cursos, callback) {
    return cursos
        .map(curso => {
            const prioridad = callback(curso);
            return {
                ...curso,
                prioridad,
                motivo: prioridad > 0 ? explicarMotivo(curso, prioridad) : null
            };
        })
        .filter(curso => curso.prioridad > 0)
        .sort((a, b) => b.prioridad - a.prioridad);
}

// Explicación del motivo según el callback
function explicarMotivo(curso, prioridad) {
    if (prioridad >= 3 && curso.calificacion < 3) {
        return "Calificación baja, requiere refuerzo.";
    }
    if (prioridad >= 2 && !curso.finalizado) {
        return "Curso no finalizado, recomendable retomarlo.";
    }
    if (prioridad >= 1 && curso.horas < 10 && curso.calificacion >= 4) {
        return "Buen resultado con pocas horas, recomendable profundizar.";
    }
    return "Recomendado según criterio definido.";
}
