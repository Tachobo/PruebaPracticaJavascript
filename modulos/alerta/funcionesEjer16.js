/* Función que se exporta y recibe un arreglo de usuarios y una función callback,
se encarga de analizar cada usuario y clasificarlo según su nivel de riesgo */
export function analizarUsuarios(usuarios, callback) {

    /* Se usa map para recorrer la lista de usuarios y crear una nueva lista,
    en cada usuario se ejecuta el callback, que recibe el usuario y devuelve
    el análisis, luego se mezclan los datos originales con el resultado */
    const resultados = usuarios.map(u => {
        const analisis = callback(u);
        return { ...u, ...analisis };
    });

    /* Se crea un objeto llamado informe donde se separan los usuarios en tres
    grupos según el nivel de riesgo que se calculó anteriormente */
    const informe = {
        bajo: resultados.filter(u => u.nivel === 0 || u.nivel <= 2),
        medio: resultados.filter(u => u.nivel === 3),
        alto: resultados.filter(u => u.nivel >= 4),
    };

    // Se devuelve el objeto con el informe final
    return informe;
}
