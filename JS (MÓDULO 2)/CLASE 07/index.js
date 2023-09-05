/**EVALUAR QUE EL USUARIO NO INGRESE INPUT VACIOS
 * EVALUAR QUE EL DNI NO SE REPITA
 * VERIFICAR LA FUNCION DE ELIMINADO EN EL FILTER, O CONSIDERACION
 * */


let dataPerson = []; //array de datos

const addDataPerson = (firstName,lastName,age,status,dni) =>{
    let persona = {  
        dni,
        firstName, //funcion que agrega el objeto persona al arreglo
        lastName,
        age,
        status        
    }

    dataPerson.push(persona);

}

const clickAddPerson = () =>{   //
    let dni = document.getElementById("dni").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.querySelector("#lastName").value;
    let age = document.getElementById("age").value;
    let status = document.getElementById("status").value;
    addDataPerson(firstName,lastName,age,status,dni);
    document.getElementById("person").reset();  //funcion que toma los datos ingresados en el formulario y los agrega a dataPerson
    document.getElementById("dni").focus();
    Swal.fire('Agregado con exito!', '', 'success');
    listDataPerson(dataPerson);
    console.table(dataPerson);
    console.log(dni);
    

    
}

const listDataPerson = (arrayDataPersona) => { //funcion que recibe el array y lo agrega a la tabla
    let list = '';
    if(arrayDataPersona.length > 0){

    arrayDataPersona.forEach( (person,index) => {
        let status = returnStatusString(person.status)
        list += `<tr>
        <td>${person.dni}</td>
        <td>${person.firstName} ${person.lastName}</td>
        <td>${person.age}</td>
        <td>${status}</td>
        <td><button class="btn btn-primary" onclick="deletePerson(${index}">Eliminar</button></td>
        </tr>`;    
    });

}

else{
    list = `<tr>
    <td class="text-center" colspan="5">NO EXISTE RESULTADO</td>
    </tr>`;
}
    document.getElementById("listPerson").innerHTML = list;
}

const returnStatusString = (status) =>{ //funcion que recibe el valor de status y lo muestra como activo, inactivo, en espera
    switch(status) {
        case "1": return "Activo";
        case "2": return "Inactivo";
        case "3": return "En espera";
        
    }
}

const filterInput = () =>{  //funcion que elimina espacios inicio-fin de la busqueda y convierte mayuscula a minuscula.
    let search = document.getElementById("search").value;
    search = search.trimStart().toLowerCase();
    document.getElementById("search").value = search;
    console.log(search);
    let filterArray = dataFilterPersona(search);
    listDataPerson(filterArray);
}

const dataFilterPersona = (search) =>{ //recibe el parametro de busqueda y devuelve coincidencias en el array
    return dataPerson.filter((person) =>{
        return person.firstName.toLowerCase().includes(search) ||
         person.lastName.toLowerCase().includes(search);
    })
}

const deletePerson = (position) =>{
    Swal.fire({
        title: 'Esta seguro?',
        text: "Deseas eliminar este registro!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminarlo!'
      }).then((result) => {
        if (result.isConfirmed) {
            dataPerson.splice(position,1);
            listDataPerson(dataPerson);
          Swal.fire(
            'Eliminado!',
            'El registro ha sido eliminado.',
            'success'
          )
        }
      })
}

const messageAlert = (title,icon='success') =>{
    Swal.fire({
        position: 'top-end',
        icon,
        title: title,
        showConfirmButton: false,
        timer: 1000
    })
}