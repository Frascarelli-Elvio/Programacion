import * as readlineSync from 'readline-sync';

let posicion : number = readlineSync.questionInt("ingrese su puesto de llegada: ");

switch (posicion) {
    case 1:
        console.log("Medalla de oro.")
        break;
     case 2:
        console.log("Medalla de plata.")
        break;
     case 3:
        console.log("Medalla de bronce.")
        break;

    default: console.log("Gracias poor participar.")
        break;
}