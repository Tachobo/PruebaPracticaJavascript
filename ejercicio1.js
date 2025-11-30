
let cantidad = parseInt(prompt("Ingrese la cantidad de aprendices"))
const aprendices = []
for (let i = 0; i < cantidad; i++){
    let aprendiz = prompt("Ingrese el nombre del estudiante");
    aprendices.push(aprendiz)
}

function validar (aprendices, nombre){
    let pregunta = aprendices.some((valor)=>{
        if(valor == nombre){
            return true;
        }
    })
    let mensaje = pregunta ? "El aprendiz está inscrito" : "El aprendiz no está inscrito";
    alert(mensaje);
}

nombre = prompt("Ingrese el nombre a evaluar");
validar(aprendices, nombre)


