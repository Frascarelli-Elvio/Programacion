/*ingresar base
ingresar potencia
devolver resultado
solo exponentes > = 0
*/

import * as rls from 'readline-sync';

let base : number, exponente : number, resultado : number;
let repetir : string; 
base = rls.questionInt("Designe la base: ");
exponente = rls.questionInt("Designe el exponente: ");
resultado = 0;
repetir = "si";

function potencia(b:number,e:number):number {
    resultado = b**e;
    return resultado;
};

while (repetir == "si") {
 
    if (exponente == 0) {
        resultado = 1;
        console.log("El resultado de este calculo es: "+resultado);
    } else {if (exponente>0) {
        resultado = potencia(base,exponente)
        console.log("El resultado de este calculo es: "+resultado);
    } else {console.log("El exponente debe ser positivo!!");
    
    }
    }
        repetir = rls.question("Desea hacer otro calculo?? si / no: ")
    if (repetir == "si") {
        base = rls.questionInt("Designe la base: ");
        exponente = rls.questionInt("Designe el exponente: ");
    }
} 