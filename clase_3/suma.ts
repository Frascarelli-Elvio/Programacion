import * as readlineSync from 'readline-sync';

let numero1 : number = readlineSync.questionInt("Ingrese un numero: ");
console.log("Primer numero: "+numero1);
let numero2 : number = readlineSync.questionInt("Ingrese otro numero: ");
console.log("Segundo numero: "+numero2);
let resultado : number = numero1+numero2;
console.log("La suma de estos valores es: " +resultado);
