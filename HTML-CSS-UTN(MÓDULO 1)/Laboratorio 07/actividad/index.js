const divUno = document.getElementById("divUno");
const divDos = document.getElementById("divDos");
const divTres = document.getElementById("divTres");

const btnCambiar = document.getElementById("btnCambiar");
const btnVolver = document.getElementById("btnVolver");

btnCambiar.addEventListener("click",function(){
    divUno.style = "background-color: red !important";
    divDos.style = "background-color: blue !important; width: 100%";
    divTres.style = "background-color: black !important; width: 100%";
})

btnVolver.addEventListener("click",function(){
    divUno.style ="";
    divDos.style ="";
    divTres.style ="";
})