import * as readlineSync from 'readline-sync';

let cantidadProducto1 : number = readlineSync.questionInt("Ingrese cantidad de unidades primer articulo: ");
const precioProducto1 = 200;
let cantidadProducto2 : number = readlineSync.questionInt("Ingrese cantidad de unidades segundo articulo: ");
const precioProducto2 = 700;
let cantidadProducto3 : number = readlineSync.questionInt("Ingrese cantidad de unidades tercer articulo: ");
const precioProducto3 = 500;

let compra : number = cantidadProducto1*precioProducto1+cantidadProducto2*precioProducto2+cantidadProducto3*precioProducto3;

let dia : number = readlineSync.questionInt("Ingrese el dia de su fecha de nacimiento: ");
let mes : number = readlineSync.questionInt("Ingrese el mes de su fecha de nacimiento: ");
let año : number = readlineSync.questionInt("Ingrese el año de su fecha de nacimiento: ");

if (mes==10) {console.log("Usted tiene un descuento del 15%, el total a pagar es de: $"+compra*0.85)
    
} else {console.log("El total a pagar es de: $"+compra)
    
};
