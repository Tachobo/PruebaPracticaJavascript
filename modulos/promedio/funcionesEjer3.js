/* Función que recibe un arreglo de notas y calcula el promedio,
   además de determinar el nivel de rendimiento según ese promedio. */
export function calcularPromedio(notas) {

    /* Inicializamos la variable 'suma' en 0 para acumular el total de las notas */
    let suma = 0;

    /* Recorremos cada nota en el arreglo usando un ciclo for.
    En cada iteración sumamos el valor de la nota actual
    a la variable 'suma', obteniendo así la suma total de todas las notas. */
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }

    /* Calculamos el promedio dividiendo la suma total entre la cantidad de notas,
    lo que nos permite conocer el rendimiento promedio del estudiante. */
    let promedio = suma / notas.length;

    /* Inicializamos la variable 'rendimiento', que almacenará la categoría del promedio */
    let rendimiento = "";

    /* Evaluamos el promedio para determinar el nivel de rendimiento. 
    Si el promedio es igual o mayor a 4.0, se considera un rendimiento Alto.
    Si está entre 3.0 y 3.99, se considera un rendimiento Medio.
    Cualquier promedio menor a 3.0 se considera un rendimiento Bajo. */
    if (promedio >= 4.0) {
        rendimiento = "Alto";
    } else if (promedio >= 3.0) {
        rendimiento = "Medio";
    } else {
        rendimiento = "Bajo";
    }

    /* Retornamos un objeto que incluye tanto el promedio numérico como
    la clasificación de rendimiento, para que pueda ser utilizado fácilmente
    por quien llame la función. */
    return { promedio, rendimiento };
}
