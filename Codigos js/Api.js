const contenedor = document.getElementById("Contenido1");
const url = "https://raw.githubusercontent.com/leoherdez/UnitApi/master/BD.json";
const uri = "https://raw.githubusercontent.com/leoherdez/UnitApi/master/";

fetch(url).then(function(respuesta){
    return respuesta.json();
}).then(function(datos){
    for(let i = 0; i < datos.length; i++ ){
        console.log(datos[i]);
        contenedor.innerHTML += "<div class='Secciones'> <div class='Apartados'> <a href='Subpaginas/Noticias.html'> <img src='"+uri+datos[i]["imagen"]+"' class='Destacado'> <h4>"+datos[i]["nombre"]+" <span>"+datos[i]["Info"]+" </span> </h4> </a> </div> </div> ";

    }
}).catch(function(error){
    console.log(error);
});