const prompt = require("prompt-sync")({ sigint:true})

/**DECLARACION DE FUNCION */

function nombreFuncion(){
    console.log("Hola");
}

/**EJECUTAMOS */

nombreFuncion();

/**FUNCION DECLARATIVA CON PARAMETRO */

function suma(x,y){
    console.log(x+y);
}

/**EJECUCION */

suma(3,6);

/**FUNCIONES POR EXPRESION */

const funcExpre = function ejemplo (){
    console.log("ejemplo");
}

/**EJECUCION */

funcExpre();

/**FUNCIONES ANONIMAS */

const functAno = function (){
    console.log("Hola");
}

/**FUNCIONES AUTOEJECUTABLES */

(
    function(){
        console.log("Hola");
    }
)();

/**FUNCIONES DE FLECHAS O ARROW */

const ejemplo = () =>{
    console.log("prueba...");
}

ejemplo();

const pepote = (y,z) =>{
    let suma = y+z;
    let resta = y-z;
    let producto = y*z;
    let cociente = y/z;
    document.write("La suma es: ",suma);
    document.write("<br>");
    document.write("La resta es: ",resta);
    document.write("<br>");
    document.write("El producto es: ",producto);
    document.write("<br>");
    document.write("El cociente es: ",cociente);
}

pepote(10,5);