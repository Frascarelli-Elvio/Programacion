//pedir al usuario numero 1 y numero 2

import * as readlineSync from 'readline-sync';

let num1 : number;
let num2 : number;
let suma : number;
let contador : number;

num1 = readlineSync.questionInt("Ingrese el primer valor: ");
num2 = readlineSync.questionInt("Ingrese el segundo valor: ");
suma = 0;

for (contador = num1 ; contador <= num2; contador++) { 
    suma = suma + contador;
    
};

console.log("La suma de los numeros enteros consecutivos entre "+num1 +" y " +num2+" es: "+suma )

