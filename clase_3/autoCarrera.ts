import * as readlineSync from'readline-sync';
let vuelta1 = readlineSync.questionInt("Tiempo de 1er vuelta: ");
let vuelta2 = readlineSync.questionInt("Tiempo de 2da vuelta: ");
let vuelta3 = readlineSync.questionInt("tiempo de 3ra vuelta: ");
let vuelta4 = readlineSync.questionInt("Tiempo de 4ta vuelta: ");

let tiempoTotal : number = vuelta1+vuelta2+vuelta3+vuelta4;
let promedioVuelta: number = tiempoTotal/4;
console.log("Tiempo total de giro (4 vueltas): "+tiempoTotal+"\n"+ "Promedio de vuelta: "+promedioVuelta);
