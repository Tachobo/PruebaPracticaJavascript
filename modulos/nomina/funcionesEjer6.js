/* Función que recibe las horas trabajadas y el valor por hora, y se encarga
de calcular el salario base multiplicando ambos valores */
export const calcularSalarioBase = (horas, valor) => horas * valor;

/* Función que recibe el salario base y calcula las deducciones, en este caso
se toma el 15% del salario como descuento */
export const calcularDeducciones = salarioBase => salarioBase * (15/100);

/* Función que recibe el salario base y el valor de las deducciones, y se encarga
de calcular el salario neto restando los descuentos al salario base */
export const calcularNeto = (salarioBase, deducciones) => salarioBase - deducciones;
