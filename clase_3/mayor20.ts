import * as readlineSync from 'readline-sync';
let numero : number = readlineSync.questionInt("ingrese el numero que desea saber si es mayor a 20: ");
if (numero>20)
      {console.log("El numero "+numero+" es mayor a 20.")
    } else  
      { console.log("El numero "+numero+" es menor a 20.")
};