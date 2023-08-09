/**ACTIVIDAD 
 * AGREGAR 15 ELEMENTOS DE OBJETO PERSONA AL ARRAY CON DIFERENTES DATOS
 * 1.- MOSTRAR EL PROMEDIO DE LAS EDADES
 * 2.- FILTRAR POR NOMBRE O APELLIDO UN VALOR INGRESADO 
 * POR EL USUARIO DONDE COINCIDA CON LA LETRA O PALABRA
 * 
 */

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

let words = prompt("Ingrese el valor a buscar: ");

let dataFilterPerson = dataPerson.filter( (element) =>{
    words = words.toLowerCase();
    let firstName = element.firstName.toLowerCase();
    let lastName = element.lastName.toLowerCase();
    return (firstName.includes(words) || lastName.includes(words))

})

console.table(dataFilterPerson);

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