export function analizarUsuarios(usuarios, callback) {
    const resultados = usuarios.map(u => {
        const analisis = callback(u);
        return { ...u, ...analisis };
    });

    const informe = {
        bajo: resultados.filter(u => u.nivel === 0 || u.nivel <= 2),
        medio: resultados.filter(u => u.nivel === 3),
        alto: resultados.filter(u => u.nivel >= 4),
    };

    return informe;
}


