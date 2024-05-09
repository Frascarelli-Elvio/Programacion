import * as readlineSync from 'readline-sync';
let base = readlineSync.questionInt("Ingrese el valor de la base del triangulo en cm: ");
let altura = readlineSync.questionInt("Ingrese el valor de la altura del triangulo en cm: ");
let area : number;
area = base*altura/2;
console.log("Base triangulo: "+base+" cm"+"\n"+"Altura triangulo: "+altura+" cm"+"\n"+"El area de su triangulo es: "+area+" cm2"+"\n");

