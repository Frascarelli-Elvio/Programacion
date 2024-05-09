import * as rls from 'readline-sync';

let llegadaColectivo : string;
console.log("Esperando el colectivo.");
llegadaColectivo = rls.question("LLego el cole? - ingrese S/N: ");

while (llegadaColectivo== "N") {
    console.log("AUN NO LLEGO, siga esperando...");
    llegadaColectivo = rls.question("LLego el cole? - ingrese S/N: ");
    
};
console.log("llego su autobus...");
