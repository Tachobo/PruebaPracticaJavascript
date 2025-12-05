let inicial, vendida, recibida;
while (true) {
temporal = undefined;
if (inicial == undefined){
    temporal = parseInt(prompt("Ingrese la cantidad inicial"));
    if(isNaN(temporal) || temporal < 0){
        alert ("El valor ingresado no es valido")
        continue
    } else {
        inicial = temporal
    }
}
if(vendida == undefined){
    temporal = parseInt(prompt("Ingrese la cantidad vendida"));
    if(isNaN(temporal) || temporal < 0){
        alert ("El valor ingresado no es valido")
        continue
    } else {
        vendida = temporal
    }
}
if(recibida == undefined){
    temporal = parseInt(prompt("Ingrese la cantidad recibida"));
    if(isNaN(temporal) || temporal < 0){
        alert ("El valor ingresado no es valido")
        continue
    } else {
        recibida = temporal
    }
}
break;
}
function calcularInventario(inicial, vendida, recibida) {
    return (inicial - vendida) + recibida;
}
let validacion = calcularInventario(inicial, vendida, recibida);
alert(`Inventario final: ${validacion}`);

if (validacion < 5){
    alert("Estado CRITICO, quedan pocos productos")
}else {
    alert ("Estado estable")
}
