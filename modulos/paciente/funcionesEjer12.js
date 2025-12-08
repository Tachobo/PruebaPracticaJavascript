/* Función que recibe un arreglo de pacientes y se encarga de seleccionar al que
tenga mayor prioridad para ser atendido */
export function seleccionarPaciente(pacientes) {

    /* Si no hay pacientes registrados, se retorna null para indicar que
    no hay nadie que seleccionar */
    if (pacientes.length === 0) return null;

    /* Se ordena el arreglo usando sort, este método usa una función callback
    que compara primero la prioridad y, si es igual, compara la edad para
    determinar el orden */
    pacientes.sort((a, b) => {

        /* Se compara la prioridad de mayor a menor */
        if (b.prioridad !== a.prioridad) {
            return b.prioridad - a.prioridad;
        }

        /* Si la prioridad es igual, se compara la edad de mayor a menor */
        return b.edad - a.edad;
    });

    // Se retorna el primer paciente del arreglo ya ordenado
    return pacientes[0];
}
