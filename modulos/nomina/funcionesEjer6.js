export const calcularSalarioBase = (horas, valor) => horas * valor;

export const calcularDeducciones = salarioBase => salarioBase * (15/100);

export const calcularNeto = (salarioBase, deducciones) => salarioBase - deducciones;
