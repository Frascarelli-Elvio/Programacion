

// recursividad
/*function imprimirArregloRec(arreglo:number[],indice:number, largo:number):number {
    if (indice<=largo) {
    console.log(`posición ${indice} tiene: ${imprimirArregloRec(arreglo,indice+1,largo)}`);
    }
    return arreglo[indice-1];
    }

    function calcularFactorialRec(n:number):number {
        let resultado:number = 1;
        if (n == 0) {
        resultado = 1;
        } else {
        resultado = n * calcularFactorialRec(n-1);
        };
        return resultado;
        }
*/
// factoria recursividad

function calcularFactorialRecursivo(n:number):number {
    let resultado:number=1;
    if (n == 0) {
        resultado = 1;
    } else {
        resultado = n*calcularFactorialRecursivo(n-1);
    }
    return resultado;
} 
function calcularFactorialSecuencial(numero:number):number {
    let resultado:number=1;
    for (let index = 2; index <= numero; index++) {
        resultado=resultado*index;
    }
    return resultado;
}
console.log(calcularFactorialRecursivo(4));
console.log(calcularFactorialSecuencial(4));