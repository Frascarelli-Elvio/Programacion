import * as readlineSync from 'readline-sync';

let suma : number;
let promedio : number;
let contador: number;
let nota : number;

suma = 0;
contador = 1;
 while (contador<=10) { 
    nota = readlineSync.questionFloat(" ingrese nota del alumno: ");
    suma = suma + nota;
    contador = contador + 1;
 };
 promedio = suma/10;
 console.log("El promedio del alumno es: ",promedio)