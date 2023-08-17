let dataPerson = [];

const addDataPerson = (firstName,lastName,age,status,dni) =>{
    let persona = {
        dni,
        firstName,
        lastName,
        age,
        status
    }

    dataPerson.push(persona);

}

