/*•Desarrolle un algoritmo que diga el precio de
una compra
• La compra se compone del precio del producto
y la cantidad
•Si el cliente gasta más de $1000 debemos
aplicarle un descuento del 10% */

import * as readlineSync from 'readline-sync';

let cantidadProducto1 : number = readlineSync.questionInt("Ingrese cantidad de unidades primer articulo: ");
let precioProducto1 : number = readlineSync.questionInt("Valor de producto 1: ");
let cantidadProducto2 : number = readlineSync.questionInt("Ingrese cantidad de unidades segundo articulo: ");
let precioProducto2 : number = readlineSync.questionInt("Valor de producto 1: ");
let cantidadProducto3 : number = readlineSync.questionInt("Ingrese cantidad de unidades tercer articulo: ");
let precioProducto3 : number = readlineSync.questionInt("Valor de producto 3: ");

let compra : number = cantidadProducto1*precioProducto1+cantidadProducto2*precioProducto2+cantidadProducto3*precioProducto3;
console.log("suma de productos: "+compra);
if (compra>1000) { console.log("El total de su compra es: "+compra*0.9+"\n")
    
} else { console.log( "El total de su compra es: "+compra+"\n")
    
};
