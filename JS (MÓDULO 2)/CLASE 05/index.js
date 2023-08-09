const prompt = require("prompt-sync")({ sigint:true})

/**crear una funcion que me permita ir agregando los elementos al array */

let dataPerson = [];

const addDataPerson = (firstName,lastName,age,status,insert=true) =>{
    let persona = {
        firstName,
        lastName,
        age,
        status
    }


if(insert){
    dataPerson.push(persona);
}
else{
    dataPerson.unshift(persona);
}
}

addDataPerson("Juan","Perez",20,1);
addDataPerson("Lucia","Ramon",10,2);
addDataPerson("Pedro","Ramon",17,3);
addDataPerson("Luciana","Gerson",20,3);
addDataPerson("Belen","Rodriguez",20,1);
addDataPerson("Rocio","Vazquez",10,1);
addDataPerson("Facundo","Ramon",18,1);
addDataPerson("Lautaro","Gutierrez",20,3);
addDataPerson("Jose","Muldon",20,1);
addDataPerson("Maria","Grande",20,1,false);


const promedio = () =>{
    let suma = 0;
    dataPerson.forEach( (element) =>{
        suma = suma + element.age;
    });

    let promedio = suma / dataPerson.length;

console.log(promedio);

//reduce(acumulador,element)

let sumaReduce = dataPerson.reduce((acumulador,element) => {
    return acumulador + element.age;
},0)

let promedioReduce = sumaReduce / dataPerson.length;
console.log(promedioReduce); //lo mismo que arriba pero hecho con reduce

}


promedio();

/**OPERACIONES CON CADENA STRING */

let cadena = "hola mundo hola";
/**length => longitud */

console.log(cadena.length);

/**toUpperCase => convierte toda la cadena a mayúsculas */
console.log(cadena.toUpperCase());
/**toLowerCase => convierte toda la cadena a minúscula */
console.log(cadena.toLowerCase());
/**trim() elimina los espacios en blanco inicio y final */
console.log(cadena.trim().length);
/**slice(start,end) */
console.log(cadena.slice(1,5));
console.log(cadena[0]);
/**replace("buscar","cambiar") reemplazar primera coincidencia */
console.log(cadena.replace("ola","como"));
/**replaceAll("buscar","cambiar") reemplaza todas las coincidencias */
console.log(cadena.replaceAll("ola","como"));
/**split("separar") convierte el vector en un array donde encuentra lo pedido dentro de split("") y no va a aparecer en la nueva transformacion*/
console.log(cadena.split(" "));
/**includes("buscar") true, false */
console.log(cadena.includes("x"));
/**startsWith("buscar") */

let words = prompt("Ingrese el valor a buscar: ");

let dataFilterPerson = dataPerson.filter( (element) =>{
    words = words.toLowerCase();
    let firstName = element.firstName.toLowerCase();
    let lastName = element.lastName.toLowerCase();
    return (firstName.includes(words) || lastName.includes(words))

})

console.table(dataFilterPerson);

dataFilterPerson = dataPerson.filter( (element) =>{
    words = words.toLowerCase();
    let firstName = element.firstName.toLowerCase();
    let lastName = element.lastName.toLowerCase();
    return (firstName.startsWith(words) || lastName.startsWith(words))

})

console.table(dataFilterPerson);
