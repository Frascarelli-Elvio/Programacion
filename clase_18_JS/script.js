"use strict"

function saludar () {
    console.log("hiciste click en el boton");
    let titulo= document.querySelector("#inputText").value;
    document.getElementById("titulo").innerText=titulo;
}
alert("mensaje de alerta");

/*document.querySelector("#titulo"); //si se usa querySelector con ID poner #
document.querySelector(".titulo"); // si se trata de una clase se usa punto
document.getElementById("titulo"); //si se una getElement ID */

console.log(document.getElementById("titulo"));
let titulo=document.getElementById("titulo").innerText;
console.log(titulo);

console.log(document.getElementsByName("entradaDeTexto"));
console.log(document.getElementsByTagName("entradaDeTexto"));

console.log(document.querySelector("#inputText").value);

let btn=document.getElementById("btn1");
btn.addEventListener("click", saludar);
