import fs from 'node:fs';
//Arreglos dados
const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina", "Queso"];
//defino la variable para acumular el contenido del arreglo
let contenidoPrecios : string = "";
let contenidoProductos : string = "";
//Recorro los arreglos para acumular el contenido de ellos en la variabla
for (let index = 0; index < precios.length; index++) {
    contenidoPrecios += precios[index]+" ";
    contenidoProductos += productos[index]+" ";
}
//Creo los txt con cada uno de los datos del arreglo
fs.writeFileSync('./valores.txt', contenidoPrecios);
fs.writeFileSync('./articulos.txt', contenidoProductos);

/* Utilizo misma variable declarada arriba ya que se va a borrar
con la nueva asignación, luego coloco  el contenido del archivo 
correspondiente y después elimino espacios en blanco y asigno
datos del string en arreglo+*/

contenidoPrecios = fs.readFileSync('./valores.txt', 'utf8');
const preciosTemporal: string = contenidoPrecios.trim(); 
const  preciosFinal : string[] = preciosTemporal.split(" ");

contenidoProductos = fs.readFileSync('./articulos.txt', 'utf8');
const productosTemporal: string = contenidoProductos.trim(); 
const  productosFinal : string[] = productosTemporal.split(" ");

console.log(preciosFinal)
console.log(productosFinal);
