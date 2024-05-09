import * as readlineSync from 'readline-sync';
let precio : number = readlineSync.questionInt("Ingrese el valor de su compra: $ ");

let descuento : number = precio*0.1;
let importe : number = precio-descuento;
console.log("Su descuento es de: $ "+descuento+"\n"+ "Importe a abonar: $ "+ importe);
