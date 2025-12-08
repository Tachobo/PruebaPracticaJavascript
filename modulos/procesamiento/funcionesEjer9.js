/* Función que procesa un arreglo de pagos y determina el estado de cada uno
   usando un callback proporcionado */
export function procesarPagos(pagos, callback) {

    /* Se utiliza el método map para recorrer cada pago del arreglo. 
    Map crea un nuevo arreglo con los resultados que retorne la función
    callback que se le pase como argumento. */
    return pagos.map(pago => {

        /* Se ejecuta el callback recibido, pasando el pago actual como parámetro.
        El callback se encarga de evaluar si el pago cumple con los criterios
        necesarios, por ejemplo, fondos suficientes o validación de datos
        y retorna un valor booleano: true si está aprobado, false si no. */
        const aprobado = callback(pago);

        /* Se retorna un nuevo objeto que conserva todas las propiedades del pago original
        pero agregando o modificando la propiedad 'estado' según el resultado del callback.
        Esto permite mantener la información original del pago y añadir el resultado
        de la evaluación de manera clara. */
        return { ...pago, estado: aprobado ? "Aprobado" : "Rechazado" };
    });
}
