

import * as rls from 'readline-sync';

let base : number, exponente : number, resultado : number; 
let repetir : string; 

resultado = 1;
repetir = "si";

while (repetir == "si") {
    base = rls.questionInt("Designe la base: ");
    exponente = rls.questionInt("Designe el exponente: ");
    if (exponente==0) {
        console.log("El resultado de este calculo es: "+resultado);
} else { 
    if (exponente>1) {
    resultado = potenciacion(base,exponente)
    console.log("El resultado de este calculo es: "+resultado);
} else {
    if (exponente==1) {
        resultado = base;
        console.log("El resultado de este calculo es: "+resultado);
} else {console.log("El exponente debe ser positivo!!");
}
}
}
repetir = rls.question("Desea hacer otro calculo?? si / no: ")
    if (repetir == "si") {
        resultado = 1;
    }
};

function potenciacion (b:number , e:number) : number {
    let i : number;
    for (i = 1; i <= e; i++) {
        resultado = resultado * b;
    }
    return resultado;
};