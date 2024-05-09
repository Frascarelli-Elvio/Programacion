import * as readlineSync from 'readline-sync';
let texto1 : string = readlineSync.question("Primer nombre: ");
let texto2 : string = readlineSync.question("Segundo nombre: ");
let texto3 : string = readlineSync.question("Apellido: ");

let resultado1 : boolean;
let resultado2 : boolean;
let resultado3 : boolean;
let resultado4 : boolean;
resultado1 = texto1 > texto2;
resultado2 = texto3 < texto1;
resultado3 = texto2 == texto1;
resultado4 = texto3 != texto3;

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
