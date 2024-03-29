const prompt = require("prompt-sync")({sigint:true}) //sirve para pedir un valor desde la consola sin tener que hacerlo desde HTML
let i = prompt("Ingrese un valor: ");
console.log(i);
console.log(Number.isInteger(i));
console.log(typeof i);

/** ESTRUCTURAS CONDICIONALES
 * IF
 * if => condicion simple
 */

if(i>10){
    console.log("el numero es mayor a 10");
}

/** if-else condicion alternativa
 * if(condicion){
 * }
 * else{
 * }
 */

if (i<10){
    console.log("El numero es menor a 10");
}
else{
    console.log("El numero es mayor o igual a 10");
}

/**saber si el valor ingresado es 
 * menor a 5 indicar reprobado
 * menor de 10 bueno
 * menor que 15 colocar bien
 * mayor que 15 colocar excelente
 */

/**IF - ELSE ANIDADO (IF ELSE IF ELSE IF ... ELSE) */

if(Number.isInteger(i)){


if (i<5){
    console.log("Reprobado");
}
else if(i<10){
    console.log("Bueno");
}
else if(i<=15){
    console.log("Bien");
}
else{
    console.log("Excelente");
}

}
else{
    i=prompt("Ingrese un numero: ");
}

/**ESTRUCTURA DE CONTROL SWITCH CASOS DE USO
 * EJ: SOLICITAR AL USUARIO INGRESAR UN VALOR DE 1-7 PARA SABER
 * QUE DIA DE LA SEMANA ES
 * switch(variable){
 * case: break;
 * case: break;
 * default: break;
 * }
 */

let dia = prompt("Ingrese un numero de 1 a 10: ");

switch(dia){
    case "1":
        console.log("Lunes");
    break;
    case "2": case "8": case "9": case "10":
        console.log("Martes");
    break;
    case "3":
        console.log("Miercoles");
    break;    
    case "4":
        console.log("Jueves");
    break;    
    case "5":
        console.log("Viernes");
    break;    
    case "6":
        console.log("Sabado");
    break;    
    case "7":
        console.log("Domingo");
    break;
    default:
         console.log("Fuera de rango");
    break;      
}

/** ESTRUCTURAS DE CONTROL REPETITIVAS 
 * while => repita mientras
 * variable de inicializacion
 * while(condicion){
 * accion(incrementar o decrementar)
 * }
 */

/**REPETIR LOS NUMEROS HASTA EL VALOR DADO POR EL USUARIO > 1 */

let r = prompt("Repetir hasta: ");

let a=1;
if (parseInt(r)>a){
while(a<r){
    console.log("Valor: ",a);
    a++;
}
}
else {
    console.log("ERROR");
}

/**FOR
 * for(inicializacion; condicion, accion){
 * 
 * }
 */

for(let i=1; i<r; i++){
    console.log("FOR: ",i);
}

var inicio = prompt("Repetir desde: ");
var final = prompt("Repetir hasta: ");

for(let i=inicio;i<=final;i++){
    console.log("RP-- ",i);
}

/**EJERCICIOS
 * INGRESADO TRES VALORES POR EL USUARIO,
 * SABER CUAL ES EL MAYOR DE LOS TRES Y EL MENOR DE LOS TRES.
 * 
 * REALIZAR LA TABLA DE MULTIPLICAR DADO UN VALOR
 *  POR EL USUARIO. 8
 * 8 X 1 = 8
 * 8 X 2 = 16
 * 8 X 10 = 80
 * 
 * REALIZAR LA TABLA DE DIVIDIR DADO UN VALOR
 * POR EL USUARIO. 1
 * 1 / 1 = 1
 * 2 / 1 = 2
 * 3 / 1 = 3
 */
