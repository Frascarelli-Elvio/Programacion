/* Crear una matriz cuadrada (5x5) donde cada fila
impar de la matriz son ceros y el resto son unos.
Luego un usuario ingresará una posición de la
matriz, (un valor para una fila y otro para la
columna). En esa posición deberá reemplazar el
valor existente por un 5.*/
import * as rls from 'readline-sync'

let filas : number = 5;
let columnas : number = 5;
let matriz : number [][] = new Array(columnas)
matriz[0] = new Array(filas)
matriz[1] = new Array(filas)
matriz[2] = new Array(filas)
matriz[3] = new Array(filas)
matriz[4] = new Array(filas)
// i cuenta filas hasta cantidad columna,
function cargarMatriz (matriz:number[][], fila:number, columna:number) {
    for (let i = 0; i < fila; i++) {
        if (i % 2 == 0) {
            for (let j = 0; j < columna; j++) {
                matriz[i][j] = 1;       
            }
        }
        else {
            for (let j = 0; j < columna; j++) {
                matriz[i][j] = 0;
                
            }
        }
    } 
}
cargarMatriz(matriz,filas,columnas);

function mostrarMatriz(matriz:number[][],f:number,c:number) {
    let cadena : string;
    for (let i = 0; i < f; i++) {
        cadena = "";
        for (let j = 0; j < c; j++) {
            cadena += `${(matriz[i][j])} `;
        }
        console.log(cadena);
    }
}
mostrarMatriz(matriz,filas,columnas);

let fil : number = rls.questionInt('Ingrese numero de fila que desar cambiar: ');
let col : number = rls.questionInt('Ingrese numero de columna que desea cambiar: ');

function modificar(matriz:number[][],fila:number,columna:number) {
    matriz[fila][columna] = 5;
}
modificar(matriz,fil,col);
mostrarMatriz(matriz,filas,columnas);