import * as readlineSync from'readline-sync';
let base : number = readlineSync.questionInt("Ingrese la medida de la base en cm: ");
let altura : number = readlineSync.questionInt("Ingrese la medida de la altura en cm: ");
console.log("El area del rectangulo es: "+base*altura+" cm2");
//muestra el area

