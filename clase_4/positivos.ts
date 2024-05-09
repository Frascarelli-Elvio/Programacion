// pedir valores al usuario hasta que introduzcan un cero
//contar valores mayores a cero
//porcentaje de positivos ingresados

import * as rls from 'readline-sync';

let valorIngresado : number;
let totalNumeros : number;
let contadorPositivos : number;
let porcentaje : number;
valorIngresado = rls.questionInt("Ingrese un numero: ");
contadorPositivos = 0;
totalNumeros = 0;

while (valorIngresado!=0) {totalNumeros = totalNumeros+1;
    
    if (valorIngresado>0) {contadorPositivos = contadorPositivos+1;
        valorIngresado = rls.questionInt("Ingrese un numero: ");
        
    } else {valorIngresado = rls.questionInt("Ingrese un numero: ");
        
    }
};


if (totalNumeros == 0) {porcentaje = 0 ; totalNumeros = totalNumeros+1;
    console.log("La cantidad de numeros positivos ingresados es: "+ contadorPositivos, ".")
    console.log("El porcentaje de estos positivos sobre el total ingresado es: "+ porcentaje +" %.");
    
} else {totalNumeros = totalNumeros+1; porcentaje = contadorPositivos*100/totalNumeros;
console.log("La cantidad de numeros positivos ingresados es: "+ contadorPositivos, ".")
console.log("El porcentaje de estos positivos sobre el total ingresado es: "+ porcentaje.toFixed(2)+" %.");
};
console.log("Totaldenumeros: "+totalNumeros);
console.log("Totaldepositivos: "+contadorPositivos);



