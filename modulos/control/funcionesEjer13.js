/* Función que recibe un arreglo de gastos y se encarga de analizar la información,
calculando el total gastado, la categoría más costosa y generando alertas */
export function analizarGastos(gastos) {

    /* Se usa reduce para sumar todos los montos de los gastos, este método recorre
    el arreglo y usa una función callback, esa función recibe un acumulador y el
    gasto actual, la idea es ir sumando monto por monto hasta obtener el total */
    const total = gastos.reduce((acc, g) => {
        /* acc es el valor que va guardando la suma parcial y g es el gasto que
        se está evaluando en ese momento, aquí se retorna la suma entre ambos
        para que el acumulador siga creciendo en cada vuelta */
        return acc + g.monto;
    }, 0);

    /* Se crea un objeto vacío llamado categorias, que se usará para guardar la suma
    de los montos por cada categoría de gasto */
    const categorias = {};
    for (let g of gastos) {
        /* Aquí se comprueba si la categoría ya existe, si no existe se inicializa en 0,
        luego se le va sumando el monto correspondiente */
        categorias[g.categoria] = (categorias[g.categoria] || 0) + g.monto;
    }

    /* Se buscan los valores más altos dentro de las categorías para encontrar
    cuál fue la categoría donde más dinero se gastó */
    let categoriaMasCostosa = null;
    let maxMonto = 0;
    for (let [cat, monto] of Object.entries(categorias)) {
        /* Si el monto actual es mayor que el máximo guardado, se actualizan
        las variables con la nueva categoría y el nuevo valor */
        if (monto > maxMonto) {
            maxMonto = monto;
            categoriaMasCostosa = cat;
        }
    }

    /* Se detectan alertas cuando alguna categoría supera el 40% del gasto total,
    se recorre cada categoría, se calcula el porcentaje y si es mayor a 40
    se guarda un mensaje dentro del arreglo de alertas */
    const alertas = [];
    for (let [cat, monto] of Object.entries(categorias)) {
        const porcentaje = (monto / total) * 100;

        /* Si el porcentaje supera el 40% se guarda un mensaje explicando el problema */
        if (porcentaje > 40) {
            alertas.push(`La categoría "${cat}" supera el 40% del gasto total (${porcentaje.toFixed(2)}%).`);
        }
    }

    /* Se devuelve un objeto con toda la información calculada para que otras
    partes del programa puedan usar este resultado */
    return {
        total,
        categoriaMasCostosa,
        alertas
    };
}
