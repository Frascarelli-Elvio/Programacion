/*Cree un método esMultiplo con 2 parámetros que devuelva el valor lógico verdadero o falso
según si el primer número que se indique como parámetro es múltiplo del segundo 
Recuerde que un numero es múltiplo de otro si al dividirlo su resto es cero
Recuerde que la operación mod permite saber si el resto de una división es cero
*/

import * as rls from 'readline-sync';

let multiplo : number;
let numero : number;
let pregunta : string = "s";

function esMultiplo(num1 : number, num2 : number) : boolean {
    let verificacion : boolean;
    if (num1 % num2 == 0) {verificacion = true;
    } else {verificacion = false;
    }return verificacion;
};

while (pregunta == "s") {
    multiplo = rls.questionInt("Ingrese valor a determinar si es multiplo: ");
    numero = rls.questionInt("Ingrese el numero divisor para verificar: ");

console.log(esMultiplo(multiplo,numero));
pregunta = rls.question("Desea continuar?? s/n: ");
};
