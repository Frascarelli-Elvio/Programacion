import * as readlineSync from 'readline-sync';

let suma : number;
let promedio : number;
let nota : number;

suma = 0;

for (let contador = 1; contador < 11 ; contador++) {
    nota = readlineSync.questionFloat(" Ingrese la nota: ");
    suma = suma + nota;

};

promedio = suma / 10;;
console.log("El promedio del alumno es: ",promedio);

