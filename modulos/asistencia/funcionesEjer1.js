/* Función que recibe el arreglo de aprendices y el nombre que se quiere buscar,
se encarga de comprobar si ese nombre existe dentro de la lista */
function validar (aprendices, nombre){

    /* Se usa el método .some() para recorrer el arreglo y comprobar si al menos
    uno de los nombres coincide con el nombre buscado, se usa este método porque
    devuelve true apenas encuentra una coincidencia */
    let pregunta = aprendices.some((valor)=>{
        
        /* Esta es la función callback de .some(), recibe cada valor del arreglo
        uno por uno, su trabajo es comparar el nombre guardado con el nombre que
        el usuario está buscando y devolver true si son iguales */
        if(valor == nombre){
            return true;
        }
    });

    /* Según el resultado de la búsqueda, se construye el mensaje que se va a mostrar */
    let mensaje = pregunta ? "El aprendiz está inscrito" : "El aprendiz no está inscrito";

    // Se muestra el mensaje final en consola
    console.log(mensaje);
}

export {validar};
