/* promedio - maximo - minimo */
/* pedir numeros hasta que ingrese 0
buscar el maximo
buscar el minimo
calcular promedio
mostrar los resultados*/


import * as rls from 'readline-sync';

let valorNumero : number;
let maximo : number;
let contador : number;
let minimo : number;
let promedio : number;
let sumaValores : number;
valorNumero = rls.questionInt("INGRESE un nuevo numero: ");
maximo = 0;
contador = 0;
minimo = 0;
promedio = 0;
sumaValores = 0;
while (valorNumero!=0) {contador = contador +1;sumaValores = sumaValores + valorNumero;
    if (valorNumero>maximo) {maximo = valorNumero
        
    }
    if (valorNumero<minimo) {minimo = valorNumero
        
    }
    valorNumero = rls.questionInt("INGRESE un nuevo numero: ");
};
promedio = sumaValores/contador;
console.log("Numero maximo: "+maximo+"\n"+"Numero minimo: "+minimo+"\n"+"El promedio de los valores es: "+promedio);
