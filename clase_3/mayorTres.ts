import * as readlineSync from 'readline-sync';

let numero1 : number = readlineSync.questionInt("Numero 1: ");
let numero2 : number = readlineSync.questionInt("Numero 2: ");
let numero3 : number = readlineSync.questionInt("Numero 3: ");

if (numero1>numero2&&numero1>numero3) { console.log("El numero "+numero1+" es el mayor de los tres.")
    
} else { if (numero2>numero1&&numero2>numero3) { console.log("El numero "+numero2+" es el mayor de los tres.")
    
} else {console.log("El numero "+numero3+" es el mayor de los tres.")
    
}
};

