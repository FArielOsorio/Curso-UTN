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
addDataPerson("Lucia","Ramon",10,1);
addDataPerson("Pedro","Ramon",17,3);
addDataPerson("Luciana","Gerson",20,3);
addDataPerson("Belen","Rodriguez",20,1);
addDataPerson("Rocio","Vazquez",10,1);
addDataPerson("Facundo","Ramon",18,1);
addDataPerson("Lautaro","Gutierrez",20,3);
addDataPerson("Jose","Muldon",20,1);
addDataPerson("Maria","Grande",20,1,false);



/**SI DESEAMOS QUE EL USUARIO INGRESE LOS DATOS Y SE CARGUEN AL ARRAY */
/** 
for(let i=1;i<=3;i++){
    let firstName = prompt("Ingrese el nombre: ");
    let lastName = prompt("Ingrese el apellido: ");
    let age = parseInt(prompt("Ingrese la edad: "));
    let status = parseInt(prompt("Ingrese el status: "));
    addDataPerson(firstName,lastName,age,status);
} */



/**FUNCIONES DE ARRAY DE METODOS, DEVOLVER UN ARRAY NUEVO 
 * forEach => recorre el array
*/

/*
dataPerson.forEach((person,index) =>{
    console.log(` ${index} => ${person.firstName}`);
});*/

let dataPersonFor = (element,index) =>{
    console.log(` ${index} => ${element.firstName}`);
}

dataPerson.forEach(dataPersonFor);

/**FILTER => FILTRADO NUEVO VECTOR RESULTANTE Y NO SE MODIFICA EL ANTERIOR */

let dataFilterPersona = dataPerson.filter((person) => {
    return (person.age>=10 && person.age<19) && person.status==3;

});

/**FIND PRIMERA COINCIDENCIA DE ARRIBA - ABAJO 
 * FINDLAST PRIMERA COINCIDENCIA DE ABAJO - ARRIBA
 * FINDINDEX DEVUELVE LA POSICION DEL ELEMENTO SI LO ENCUENTRA, SI NO -1
*/

dataFilterPersona = dataPerson.find((element) =>{
    return element.age == 10;
})

dataFilterPersona = dataPerson.findLast((element) =>{
    return element.age == 20;
})

dataFilterPersona = dataPerson.findIndex((element) =>{
    return element.age == 20;
})

/**MAP NOS PERMITE UNA INTERACCION CON LOS ELEMENTOS */

let dataNewPerson = dataPerson.map((element,index) =>{
    //return {fullname:element.firstName+ ' ' + element.lastName, index};


let person = {
    fullname:element.firstName+ ' ' + element.lastName,
    age: '',
    status: ''
};

if(element.age >= 18) {
    person.age ="MAYOR DE EDAD ";
}
else{
    person.age = "MENOR DE EDAD ";
}

switch(element.status){
    case 1: person.status="INACTIVO"; break;
    case 2: person.status="PENDIENTE"; break;
    case 3: person.status="SIN ACCEDER"; break;
    default: break;
}

return person;

});

console.table(dataNewPerson)

/**METODOS DE ORDENAMIENTO SORT(a,b) */

dataPerson.sort((a,b) =>{
    return a.age-b.age;
})

let arrayD = [1,4,6,9,10,5];
arrayD.sort((a,b) =>{
    return b-a;
});
console.table(arrayD);

