/**ARRAYS => ARREGLOS => VECTORES
 * CONJUNTO O AGRUPACION DE ELEMENTOS EN UNA MISMA VARIABLE
 * COMO SE DECLARA O INICIALIZA UN ARRAY
 */

const ejemplo = new Array(3,4,5,"ea",7,"ejemplo",true);
console.log(ejemplo);
const ejemploDos = [1,2,3,4,5,6,"jopito",false];
console.log(ejemploDos);

//CANTIDAD DE ELEMENTOS DE UN ARRAY
console.log(ejemplo.length);
console.log(ejemplo[2]);

/**PROPIEDADES Y FUNCIONES DE LOS ARRAY */

/**push() insertar elemento al final del array */

ejemploDos.push(3,"holaa");

console.log(ejemploDos);

/**unshift() inserta elemento al principio del array */

ejemploDos.unshift("nuevo item");
console.log(ejemploDos);

/**pop() elimina elemento al final del array
 * shift() elimina elemento al principio del array
 */

ejemploDos.pop()
ejemploDos.shift()

console.log(ejemploDos)

/**CONCAT => concatenar (devuelve un valor, no modifica) */

let neejemplo = ejemploDos.concat(ejemplo);

console.log(neejemplo);

/**join() separar => convertir un array a string (devuelve un valor, no modifica) */

console.log(neejemplo.join("-"));

/**BUSQUEDA SIMPLE 
 * COMPROBAR SI EL ELEMENTO EXISTE includes() verdadero o falso
*/

console.log(ejemploDos.includes(898));

/**VERIFICAR el index-posicion indexOf() devuelve la posicion de la primera aparicion del elemento 
 * si el valor no existe, devolvera un -1
 * lastindexOf => busca del final hacia el principio la primera coincidencia
*/

console.log(ejemploDos.indexOf(3));
console.log(ejemploDos.lastIndexOf(3));

//recorrer el array

//forEach, map
//(a,b) el primero recorre el elemento y el segundo la posicion
neejemplo.forEach((element,index)=>{
    console.log(`POSITION ${index} valor = ${element}`);
});

neejemplo.map((element)=>{
    console.log(element);
});

/**filter => filtrado muchos, find uno solo*/

let filterResult = neejemplo.filter((element) => {
     return element>=5;
     });

/**filterResult = neejemplo.filter((element) => {
        return element.startsWith("e");     //SOLO FUNCIONA SI ES TIPO STRING
        });
console.log(filterResult); 
*/

//find findIndex findLast findLastIndex
let findResult = neejemplo.find((element) => {
    return element == 5;
});

console.log(findResult);


/**PARA ELIMINAR UN ELEMENTO EN UNA POSICION PARTICULAR */

neejemplo.splice(3,1); //reorganiza las posiciones, elimina la posicion 3 y reorganiza
neejemplo.slice(3,1); // la posicion tres la elimina (sin reorganizar otro elemento a esa posicion)
