"use strict"

//let tiros = 10;



function tirar () {
    let vector = new Array(10);
    let siete = 0;
    for (let index = 0; index < vector.length; index++) {
        vector [index]= (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
        if (vector[index]==7) {
            siete++;
        }
    }
    console.log(vector);
    //let resultado = document.querySelector(".losSiete");
    document.querySelector(".losSiete").innerText = `Usted saco ${siete} veces el numero 7.`;
}
let boton= document.getElementById("dados");
boton.addEventListener("click",tirar);