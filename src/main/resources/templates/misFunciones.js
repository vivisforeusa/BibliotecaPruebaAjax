
function consultarProductos(){
$.ajax({
url: "http://localhost:8080/ListarLibros",
type:"GET",
datatype:"JSON",
success:function(respuesta){
 console.log(respuesta);
 mostrarTabla(respuesta)
}
});
}

function mostrarTabla(items){
    let myTabla="<table>";
    for(i=0;i<items.length;i++){
    myTabla+="<tr>";
    myTabla+="<td>"+items[i].isbn+"</td>";
    myTabla+="<td>"+items[i].titulo+"</td>";
    myTabla+="<td>"+items[i].autor+"</td>";
    myTabla+="<td>"+items[i].editorial+"</td>";
    myTabla+="<td>"+items[i].no_page+"</td>";
    myTabla+="</tr>";
}

myTabla+="</table>";
$("#resultado").append(myTabla);
}

function guardarLibros(){
let datos={
isbn:$('#isbn').val(),
titulo:$('#titulo').val(),
autor:$('#autor').val(),
editorial:$('#editorial').val(),
no_page:parseInt($('#no_page').val())
}

let datosEnvio=JSON.stringify(datos);
console.log(datosEnvio)
$.ajax({
url: "http://localhost:8080/AgregarLibro",
type:"POST",
data:datosEnvio,
contentType:"application/JSON",
datatype:"JSON",
success:function(respuesta){
 //console.log(respuesta);
 alert("Libro Registrado")
}
});
}
