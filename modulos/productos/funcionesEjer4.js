/* Función que compara dos objetos según su propiedad 'valor'.
Retorna -1 si 'a' es menor que 'b', 1 si 'a' es mayor que 'b',
y 0 si son iguales. Esta función está pensada para usarse como
callback en métodos de ordenamiento como sort. */
export function compare(a, b) {

    /* Se verifica si el valor de 'a' es menor que el de 'b'. 
    Si es así, se retorna -1 para indicar a sort que 'a' debe
    ir antes que 'b' en el arreglo ordenado. */
    if (a.valor < b.valor) {
        console.log("ingresa -1");
        return -1;
    }

    /* Se verifica si el valor de 'a' es mayor que el de 'b'.
    Si es así, se retorna 1 para indicar a sort que 'a' debe
    ir después de 'b' en el arreglo ordenado. */
    if (a.valor > b.valor) {
        console.log("ingresa 1");
        return 1;
    }

    /* Si los valores son iguales, se retorna 0 para indicar a sort
    que no hay preferencia de orden entre estos dos elementos. */
    console.log("Ingresa 0");
    return 0;
}

/* Función que recibe un arreglo de productos y lo ordena de menor a mayor
según la propiedad 'valor'. Se utiliza la función 'compare' como callback
para el método sort, delegando la comparación a esa función. */
export function ordenAsc(productos) {
    return productos.sort(compare);
}

/* Función que recibe un arreglo de productos y lo ordena de mayor a menor
según la propiedad 'valor'. Se utiliza un callback inline que recibe
dos elementos y retorna la diferencia b.valor - a.valor para invertir el orden. */
export function ordenDesc(productos) {
    return productos.sort((a, b) => b.valor - a.valor);
}
