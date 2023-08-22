const prompt = require("prompt-sync")({sigint:true})
/*
//1)  Pide la edad y si es mayor de 18 años indica que ya puede conducir.

let edad = prompt("Indique su edad: ");

if (edad>18) {
    console.log("Ya puedes conducir");
}
else {
    console.log("Su edad:",edad,", no es suficiente para poder manejar");
} */

/* 2) En el siguiente ejercicio vamos a practicar con el bucle do while para que el código se ejecute una y otra vez hasta que el usuario decida parar

Pide una nota (número). Muestra la calificación según la nota:

0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente  */

do {
    let nota = prompt("Ingrese tu nota del 0-10");
if (Number(nota) == nota){   

    if (nota>=0 && nota<=10){
    if (nota<3){
        console.log("Muy deficiente");
    }
    else if (nota>=3 && nota<5){
        console.log("Insuficiente");

    }
    else if (nota>=5 && nota<6){
        console.log("Suficiente");
    }
    else if (nota>=6 && nota<7){
        console.log("Bien");
    }
    else if (nota>=7 && nota<9){
        console.log("Notable");
    }
    else if (nota>=9){
        console.log("Sobresaliente");
    }
}
    else {
    console.log("Ha ingresado un valor incorrecto");
    }
}    
else {

}    



