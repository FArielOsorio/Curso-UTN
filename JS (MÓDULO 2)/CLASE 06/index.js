/*let dataPerson = [];

const addDataPerson = (firstName,lastName,age,status,dni) =>{
    let persona = {
        dni,
        firstName,
        lastName,
        age,
        status
    }

    dataPerson.push(persona);

}*/

function tablaDelOnce(tabla,hasta = 10){
for (let i=0;i<=hasta; i++){
    console.log(tabla,"x",i,"=",tabla*i);
}
}

tablaDelOnce(2);