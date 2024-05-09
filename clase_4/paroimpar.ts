//ingresa numero el usuario
//si es par o impar informar por pantalla
//es par si mod 2 == 0
//es impar si mod != 0
//si es 0 se debe volver a pedir que ingrese numero mayor a 0

import * as readlineSync from 'readline-sync';

let numero : number;
numero = readlineSync.questionInt("Ingrese un numero: ");

while (numero==0) {
    console.log("Por favor ingrese un numero mayor a cero.")
    numero = readlineSync.questionInt("Ingrese un numero: ");
};
if (numero % 2 == 0) {console.log("El numero "+numero+" es PAR")
    
} else {console.log("El numero "+numero+" es IMPAR")
    
};