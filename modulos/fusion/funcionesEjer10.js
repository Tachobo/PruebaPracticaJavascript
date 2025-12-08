/* Función que recibe dos listas de usuarios, una del sistema A y otra del sistema B,
su objetivo es unirlas y eliminar los duplicados dejando la información más completa */
export function fusionarUsuarios(usuariosA, usuariosB) {

    /* Se crea un nuevo arreglo que une las dos listas usando el operador spread,
    esto permite trabajar con todos los usuarios en una sola lista */
    const fusion = [...usuariosA, ...usuariosB];

    // Se crea un arreglo vacío donde se irán guardando los usuarios depurados
    const depurado = [];

    /* Se recorre cada usuario de la lista fusionada para comprobar si ya existe
    uno con el mismo documento en la lista depurada */
    for (let usuario of fusion) {

        /* Se busca dentro del arreglo depurado si ya existe un usuario con el mismo
        documento usando find */
        const existente = depurado.find(u => u.documento === usuario.documento);

        // Si no existe, se agrega directamente a la lista
        if (!existente) {
            depurado.push(usuario);
        } else {

            /* Si ya existe, se cuentan los campos que tienen información para decidir
            cuál versión del usuario es más completa */
            const camposExistente = Object.values(existente)
                .filter(v => v !== undefined && v !== "").length;

            const camposNuevo = Object.values(usuario)
                .filter(v => v !== undefined && v !== "").length;

            /* Si el usuario nuevo tiene más información que el anterior, se reemplaza
            el registro antiguo por el nuevo */
            if (camposNuevo > camposExistente) {
                const index = depurado.findIndex(u => u.documento === usuario.documento);
                depurado[index] = usuario;
            }
        }
    }

    // Se devuelve la lista final de usuarios ya fusionada y depurada
    return depurado;
}
