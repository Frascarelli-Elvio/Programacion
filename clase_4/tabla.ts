import * as readlineSync from 'readline-sync';

let num1 : number;
let num2 : number;

num1 = readlineSync.questionInt("Ingrese el numero: ");
num2 = readlineSync.questionInt("Hasta que valor desea conocer la tabla del "+num1+" : ");

for (let conteo = 1; conteo <= num2; conteo++) {
    console.log(num1+" x "+conteo+" = "+ num1 * conteo);
    
};