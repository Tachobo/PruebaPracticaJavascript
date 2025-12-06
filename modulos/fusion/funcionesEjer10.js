export function fusionarUsuarios(usuariosA, usuariosB) {
    const fusion = [...usuariosA, ...usuariosB];

    const depurado = [];

    for (let usuario of fusion) {
        const existente = depurado.find(u => u.documento === usuario.documento);
        if (!existente) {
            depurado.push(usuario);
        } else {
            const camposExistente = Object.values(existente).filter(v => v !== undefined && v !== "").length;
            const camposNuevo = Object.values(usuario).filter(v => v !== undefined && v !== "").length;
            if (camposNuevo > camposExistente) {
                const index = depurado.findIndex(u => u.documento === usuario.documento);
                depurado[index] = usuario;
            }
        }
    }

    return depurado;
}
