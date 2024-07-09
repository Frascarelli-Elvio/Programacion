//Implemente un método llamado cantidadDeDivisores que reciba un número entero 
//y devuelva la cantidad de divisores 
//Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8, 16, por lo que la respuesta
//debería ser 5 
//Re-utilice el método esMultiplo implementado para el ejercicio anterior

import*as rls from 'readline-sync';

let numeroEntero : number;
let seguirCalculando : string;

seguirCalculando = "si";

function esMultiplo(num1 : number, num2 : number) : boolean {
    let verificacion : boolean;
    if (num1 % num2 == 0) {verificacion = true;
    } else {verificacion = false;
    }return verificacion;
};

while (seguirCalculando == "si") {
    numeroEntero = rls.questionInt("Ingrese un numero entero: ");
    cantidadDeDivisores(numeroEntero);
    console.log("El numero "+numeroEntero+" tiene "+cantidadDeDivisores(numeroEntero)+" divisores.");
    seguirCalculando = rls.question("Desea seguir calculando?? si/no: ");
};

function cantidadDeDivisores(variable : number) {
    let contador : number;
    contador = 0;
    for (let i = 1; i <= variable; i++) {
        if (esMultiplo(variable,i)==true) {
            contador = contador + 1;
        }
    } return contador;
};

