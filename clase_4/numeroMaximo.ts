import * as readlineSync from 'readline-sync';

let valor : number;
let contador : number;
let numeromaximo: number=0;
let numero : number;


valor = readlineSync.questionFloat("Introduzca valor: ");

while (valor!=0) { numero = valor;
    if (numeromaximo<numero ) { numeromaximo = valor
        
    } else {
        
    }
    valor = readlineSync.questionFloat("Introduzca valor: ");
};
console.log("El maximo numero ingresado es: "+ numeromaximo);

