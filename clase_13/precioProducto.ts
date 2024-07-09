/* Guarda la información de los siguientes arrays:
const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina", "Queso"];
en un archivo “precios.txt” y “productos.txt”
respectivamente.
Luego recupera la información en forma de
array nuevamente y mostrala por consola.*/
import fs from 'node:fs'

const precios:number[] = [525, 3500, 400, 1999];
const productos:string[] = ["Leche", "Galletitas", "Harina", "Queso"];

function pasarDeArrayAstring (arreglo:string[]) : string {
    let texto : string ="";
    for (let index = 0; index < arreglo.length; index++) {
        texto += arreglo[index]+" ";
    }
    return texto;
}
//guardo el arreglo productos convertido a una sola frase por la funcion, en una nueva variable
let productosTexto :string = pasarDeArrayAstring(productos);
//genero el archivo .txt
fs.writeFileSync('./productos.txt', productosTexto);
console.log('Archivo productos.txt generado exitosamente.');
//convierto a string el contenido del arreglo precio
function cambiarDeArrayAstring (arreglo:number[]) : string {
    let texto : string ="";
    for (let index = 0; index < arreglo.length; index++) {
        texto += arreglo[index]+" ";
    }
    return texto;
}
//guardo el arreglo precios convertido a una sola frase por la funcion, en una nueva variable
let preciosTexto : string = cambiarDeArrayAstring(precios);
//genero el archivo.txt
fs.writeFileSync('./precios.txt',preciosTexto);
console.log('Archivo precios.txt generado exitosamente.');

//recuperacion de .txt ---> array nuevamente (productos)
const productos2 : string = fs.readFileSync('./productos.txt','utf8');
const productos3 : string = productos2.trim();
const arregloProductos : string[]= productos3.split(" ");
console.log(arregloProductos);
//recuperacion de .txt ---> array nuevamente (precios)
const precios2 : string = fs.readFileSync('./precios.txt','utf8');
const precios3 : string = precios2.trim();
const arregloPrecios : string[] = precios3.split(" ");
let arregloPrecios2 : number [] = [];
function pasarStringAnumber(array:string[],array2:number[]) {
    for (let i = 0; i < array.length; i++) {
        array2[i]= parseInt(array[i]);
        
    }
} 
pasarStringAnumber(arregloPrecios,arregloPrecios2);
console.log(arregloPrecios2);
