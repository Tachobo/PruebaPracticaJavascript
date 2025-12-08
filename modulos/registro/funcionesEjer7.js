/* Función que recibe uno o más productos y los registra en un arreglo,
   asegurándose de que no haya duplicados usando spread. */
export function registrarProductos(...productos) {

    /* Utilizamos un Set para eliminar automáticamente los productos repetidos.
    Un Set es una estructura que solo permite valores únicos, por lo que al
    pasar el arreglo de productos dentro de él, se eliminan las repeticiones. 
    Luego usamos el operador spread para convertir el Set de nuevo en un arreglo. */
    const listaFinal = [...new Set(productos)];

    /* Retornamos el arreglo final que contiene todos los productos recibidos,
    pero sin duplicados, listo para ser utilizado o almacenado según se necesite. */
    return listaFinal;
}
