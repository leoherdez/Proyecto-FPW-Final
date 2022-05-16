const contenedor2 = document.getElementById("Contenido2");
const url2 = "https://raw.githubusercontent.com/leoherdez/UnitApi/master/BD2.json";
const uri2 = "https://raw.githubusercontent.com/leoherdez/UnitApi/master/";

fetch(url2).then(function(respuesta){
    return respuesta.json();
}).then(function(datos){
    for(let i = 0; i < datos.length; i++ ){
        console.log(datos[i]);
        contenedor2.innerHTML += "<div class='Secciones'> <div class='Apartados'> <a href='Subpaginas/Comunidad.html'> <img src='"+uri+datos[i]["imagen"]+"' class='Destacado'> <h4>"+datos[i]["nombre"]+" <span>"+datos[i]["Info"]+" </span> </h4> </a> </div> </div> ";

    }
}).catch(function(error){
    console.log(error);
});