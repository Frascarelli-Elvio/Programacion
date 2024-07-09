
"use strict"

let contador=0;
function sumar() {
    contador ++;
    document.getElementById("cuantos").innerText=`Hiciste click ${contador} veces`;
    /*let btns= document.getElementById("botonSumar");
    btns.addEventListener("click", cambiar(contador));*/

    //alert(`Hiciste click ${contador} veces`);
}
function restar() {
    contador--;
    /*let btnr=document.getElementById("botonRestar");
    btnr.addEventListener("click", cambiar(contador));*/
    document.getElementById("cuantos").innerText=`Hiciste click ${contador} veces`;
    //alert(`Hiciste click ${contador} veces`);
}
/*function cambiar(cantidad) {
    document.getElementById("cuantos")=`Hiciste click ${cantidad} veces`;

}*/
let btns= document.getElementById("botonSumar");
btns.addEventListener("click", sumar);

let btnr=document.getElementById("botonRestar");
btnr.addEventListener("click", restar);