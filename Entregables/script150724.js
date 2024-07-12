"use strict"

/*let botones = document.querySelectorAll(".botones");

for (let index = 0; index < botones.length; index++) {
    botones[index].addEventListener("click", function(e){
        let padre = this.parentElement;
        padre.classList.toggle("esconder");
    })
    
}*/
let btn1=document.getElementById("boton1");
btn1.addEventListener("click", ocultar1);

let btn2=document.getElementById("boton2");
btn2.addEventListener("click",ocultar2);

function ocultar1() {
    btn1.parentElement.classList.add("esconder");
    btn2.parentElement.classList.remove("esconder");
}
function ocultar2() {
    btn2.parentElement.classList.add("esconder");
    btn1.parentElement.classList.remove("esconder");
}