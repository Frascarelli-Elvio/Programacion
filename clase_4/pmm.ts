/* promedio - maximo - minimo */
/* pedir numeros hasta que ingrese 0
buscar el maximo
buscar el minimo
calcular promedio
mostrar los resultados*/


import * as rls from 'readline-sync';

let valorIngresado : number;
let totalNumeros : number;
let numeroMaximo : number = 0;
let numeroMinimo : number = 0;
let suma : number;
let promedio: number;

valorIngresado = rls.questionInt("Ingrese un numero: ");
totalNumeros = 0;
suma = 0;

while (valorIngresado!=0) {totalNumeros = totalNumeros+1;
    suma = suma + valorIngresado;
    
    if (valorIngresado > numeroMaximo) {numeroMaximo = valorIngresado;
       
    } else {
    
    };
    if (valorIngresado < numeroMinimo) { numeroMinimo = valorIngresado;
       
    } else {
        
    };
    valorIngresado = rls.questionInt("Ingrese un numero: ")
};
promedio = suma/totalNumeros;

console.log("Numero maximo: "+numeroMaximo);
console.log("Numero minimo: "+numeroMinimo);
console.log("El promedio es: "+promedio)