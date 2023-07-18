const divUno = document.getElementById("divUno");
const divDos = document.querySelector("#divDos");
const divTres = document.querySelector('#divTres');

const pruebaClassName = document.querySelectorAll(".row"); //document.getElementsByClassName("row");

//console.log(pruebaClassName[0]);

const btnCambiar = document.getElementById("btnCambiar");
const btnVolver = document.getElementById("btnVolver");

btnCambiar.addEventListener("click",function(){
    divUno.style = "background-color: red !important";
    divDos.style = "background-color: orange !important; width: 100%"
    divTres.style = "background-color: blue !important; width: 100%"
})

btnVolver.addEventListener("click",function(){
    divUno.style= "";
    divDos.style= "";
    divTres.style= "";
})

//Acceder a los atributos de html (mediante el elemento seleccionado)
//hasAttributes() indica si un elemento de html tiene atributos boolean(true, false)
console.log(divUno.hasAttributes());
//hasAttribute(Nombre del Atributo) => boolean(true,false)
console.log(divUno.hasAttribute("class"));
// Agregar, eliminar y consultar un atributo... 

divUno.setAttribute("data-number","bg-success"); //Agregar
console.log(divUno.getAttribute("class")); //Leo
divUno.removeAttribute("data-number"); //Elimino

//Acceder a los elementos de clases y añadir o remover clases, classList add - remove


divUno.classList.remove("bg-primary");
divUno.classList.add("m-2","bg-success");

//Agregar o insertar elementos HTML => js (dinámicos)

//appendChild(Elemento Creado) =>Agrega el elemento como ultimo hijo;
//removeChild() => Eliminar;

const elementoHtml = document.createElement("div");
elementoHtml.classList.add("bg-primary", "text-white");
elementoHtml.textContent = "Ejemplo de HTML.... Add desde js...";
/*
divDos.appendChild(elementoHtml);

const eliminarHtml = divDos.querySelector("div");
setTimeout(function(){
    divDos.removeChild(eliminarHtml);
},3000); */

//before => agrega el elemento antes del padre
//after => agrega el elemento despues del padre
//prepend => agrega el elemento como primer hijo
//append => agrega el elemento como ultimo hijo
//remove => elimina el propio elemento

divDos.append(elementoHtml);

setTimeout(function(){
    divDos.remove(eliminarHtml);
},5000);

const addElement = document.getElementById("addElement");
const prueba = document.getElementById("prueba");

addElement.addEventListener("click",function(){
    let divCreate = document.createElement("div");
    divCreate.textContent = "prueba...";
    divCreate.classList.add("text-dark");
    prueba.append(divCreate);
})