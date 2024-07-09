//arreglo de ejemplo
let array : number [] = [1,2,3,4,5,6,7];

function invertirArray(arreglo:number[],iz:number,id:number) {
    let aux:number;
    if (iz<id) {
        aux = arreglo[iz];
        arreglo[iz]=arreglo[id];
        arreglo[id]=aux;
        invertirArray(arreglo,iz+1,id-1)
    }
}
function mostrarArray (arreglo:number[]) {
    let vector : string = "";
    for (let index = 0; index < arreglo.length; index++) {
        vector += arreglo[index] +" ";
    }
    console.log(vector);

}
function invertirArraySec(arreglo:number[],largo:number):any {
    let aux:number;
    for (let index = 0; index < largo - index ; index++) {
        aux=arreglo[index];
        arreglo[index]=arreglo[largo-index];
        arreglo[largo-index]=aux;
    }
}

console.log("original");
mostrarArray(array);
//invertirArray(array , 0 , 6);
invertirArraySec(array,7);
console.log("invertido");
mostrarArray(array);

