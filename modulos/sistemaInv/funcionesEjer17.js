/* Función que recibe una fecha en formato "día/mes/año" y la convierte
en un objeto Date de JavaScript. Esto facilita operaciones posteriores
con fechas, como cálculos de vencimiento. */
export function parseFecha(dmy) {
    /* Separamos el string usando '/' como separador y convertimos cada
    valor a número. Luego se desestructura en día, mes y año. */
    const [d, m, y] = dmy.split("/").map(Number);

    /* Creamos un objeto Date. Los meses en JavaScript van de 0 a 11,
    por eso restamos 1 al mes. */
    return new Date(y, m - 1, d);
}

/* Función auxiliar que calcula la cantidad de días que faltan
desde hoy hasta la fecha indicada. */
function diasHasta(fecha) {
    const msPorDia = 1000 * 60 * 60 * 24; // Milisegundos en un día
    /* Restamos la fecha actual de la fecha objetivo, dividimos por milisegundos
    por día y usamos Math.ceil para redondear hacia arriba, asegurando que
    cualquier fracción de día cuente como un día completo. */
    return Math.ceil((fecha.getTime() - Date.now()) / msPorDia);
}

/* Función que procesa un inventario de productos, aplicando un callback
a cada producto para determinar la acción correspondiente, y genera
un informe con varios datos útiles sobre el inventario. */
export function procesarInventario(inventario, callback, diasUmbralVencimiento = 15) {

    /* Aplicar callback a cada producto.
    Se crea un nuevo arreglo donde cada producto conserva sus propiedades
    originales y se agrega la propiedad 'accion', que contiene el resultado
    del callback aplicado al producto. Esto permite mantener la información
    original mientras agregamos datos calculados dinámicamente. */
    const conAccion = inventario.map(p => ({ ...p, accion: callback(p) }));

    /* Clasificar productos por acción.
    Se usa reduce para agrupar los productos en un objeto donde cada clave
    es una acción y el valor es un arreglo de productos que requieren esa acción. */
    const porAccion = conAccion.reduce((acc, p) => {
        (acc[p.accion] ??= []).push(p);
        return acc;
    }, {});

    /* Subreporte de productos perecederos próximos a vencer.
    Primero se filtran los productos perecederos con fecha de vencimiento válida,
    luego se agrega la propiedad 'diasRestantes' usando la función diasHasta.
    Después se filtran los productos cuyo vencimiento está dentro del umbral
    definido (por defecto 15 días) y finalmente se ordenan por días restantes,
    de menor a mayor. */
    const proximosAVencer = conAccion
        .filter(p => p.perecedero && p.fechaVencimiento instanceof Date)
        .map(p => ({ ...p, diasRestantes: diasHasta(p.fechaVencimiento) }))
        .filter(p => p.diasRestantes >= 0 && p.diasRestantes <= diasUmbralVencimiento)
        .sort((a, b) => a.diasRestantes - b.diasRestantes);

    /* Determinar el producto con mayor y menor stock.
    Se usa reduce para recorrer todos los productos y mantener
    una referencia al producto con stock máximo y mínimo. */
    const mayorStock = conAccion.reduce((max, p) => (!max || p.stock > max.stock ? p : max), null);
    const menorStock = conAccion.reduce((min, p) => (!min || p.stock < min.stock ? p : min), null);

    /* Resumen por categoría.
    Se usa reduce para crear un objeto donde cada clave es una categoría
    y el valor es la cantidad de productos que pertenecen a esa categoría. */
    const resumenCategorias = conAccion.reduce((acc, p) => {
        acc[p.categoria] = (acc[p.categoria] ?? 0) + 1;
        return acc;
    }, {});

    /* Valor total del inventario.
    Se recorre cada producto, multiplicando su precio por la cantidad en stock,
    y se suman todos los valores para obtener el valor total del inventario. */
    const valorTotal = conAccion.reduce((suma, p) => suma + (p.precio * p.stock), 0);

    /* Retornamos un objeto con todos los datos calculados.
    Esto incluye la lista de productos con acción, la clasificación por acción,
    los perecederos próximos a vencer, los productos con mayor y menor stock,
    el resumen por categoría y el valor total del inventario. */
    return {
        productosConAccion: conAccion,
        clasificadosPorAccion: porAccion,
        proximosAVencer,
        mayorStock,
        menorStock,
        resumenCategorias,
        valorTotal
    };
}
