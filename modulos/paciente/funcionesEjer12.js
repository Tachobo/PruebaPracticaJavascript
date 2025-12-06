export function seleccionarPaciente(pacientes) {
    if (pacientes.length === 0) return null;

    pacientes.sort((a, b) => {
        if (b.prioridad !== a.prioridad) {
            return b.prioridad - a.prioridad;
        }
        return b.edad - a.edad;
    });

    return pacientes[0];
}
