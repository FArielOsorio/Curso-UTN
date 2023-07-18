// Declaracion de variables
// const - let - var

/** funciones predeterminadas del navegador (window) */

//Alerta predeterminadas

/*

alert("Alerta ...");
confirm("Esta seguro?");
prompt("Ingrese el nombre:");

*/

//print(); //apertura el cuadro de dialogro de impresion
//open("https://google.com"); //apertura una nueva ventana
//console.log(location.href);

//Intervalos de tiempo, tiempo de espera
const parrafoUno = document.querySelector("#parrafoUno");
const intervalTime = setInterval(function(){
 //   parrafoUno.innerHTML += "prueba...";
    const fecha = new Date();
    document.getElementById('reloj').innerHTML = fecha.toLocaleTimeString();
},1000);

setTimeout(function(){
    parrafoUno.innerHTML += "sensei...";
},1000);


// clearInterval() //

const boton = document.querySelector('#eventStop');
boton.addEventListener('click',function(){
    clearInterval(intervalTime);
});

// Eventos acciones...

/*click, dblclick,
change => input
drag drop
keypress keyup keydown
mouseover mouseup mousedown mouseenter
scroll
play playing pause volumechange
online offline
*/

// Crear elementos de HTML

const ejemploDiv = document.createElement('div');
ejemploDiv.innerHTML = '<p>Ejemplo de Prueba...</p><p>Ejemplo de acciones...</p>';
const divContenedor = document.querySelector(".contenedor");
divContenedor.appendChild(ejemploDiv);
//divContenedor.appendChild("<p>Ejemplo de texto</p>");

const image = document.createElement("img");
image.src= "https://picsum.photos/id/605/100/100";
image.alt ="Fotico";
divContenedor.appendChild(image);

const formulario = document.createElement('form');

const input = document.createElement('input');
input.placeholder = "ejemplo";
input.type = "text";


formulario.appendChild(input);