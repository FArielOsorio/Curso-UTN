

function escribirTablaDividir(j){
    document.write("<h2>Tabla de dividir del " + j +"</h2>");
    document.write("<br>");

    document.write("<ul>")



    for(i=1;i<=10;i++){
        document.write(i + " / " +j + " = " + i/j);
        document.write("<br>");
    }


}

escribirTablaDividir(5)