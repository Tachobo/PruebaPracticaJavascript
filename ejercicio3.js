const NumeroEs = 5;

for (let i = 1; i <= NumeroEs; i++) {
    const nota1 = parseFloat(prompt(`Estudiante ${i}: ingrese la primera nota`));
    const nota2 = parseFloat(prompt(`Estudiante ${i}: ingrese la segunda nota`));
    const nota3 = parseFloat(prompt(`Estudiante ${i}: ingrese la tercer nota`));
    
    const promedio = (nota1 + nota2 + nota3)/3;
    if(promedio>=3.0){
        alert(`Estudiante número ${i}, tu promedio es de ${promedio}, 
Felicidades, has aprobado`)
    }else{
        alert(`Estudiante número ${i}, tu promedio es de ${promedio},
lo siento mucho, has reprobado`)
    }
}