/* DATOS PELICULAS */
/* A partir de este objeto JSON obtenemos los datos de las peliculas en cartelera */
const peliculas = {
    "Pelicula1" : {
        "Nombre": "Venom 2: Habrá matanza",
        "Duracion": "2 horas" ,
        "Precio" : "2.53",
        "Clasificacion" : "+12",
        "TipoB": "Premiun", 
        "Horarios": {
            "1": "4:30" , "2": "6:30", "3": "8:30"
        } 
    }, "Pelicula2" : {
        "Nombre": "BlackWidown",
        "Duracion": "2 horas" ,
        "Precio" : "3",
        "Clasificacion" : "+12",
        "TipoB": "Premiun", 
        "Horarios": {
            "1": "5:00" , "2": "7:00", "3": "9:00"
        } 
    },
    "Pelicula3" : {
        "Nombre": "Spider-Man: No way Home",
        "Duracion": "3 horas" ,
        "Precio" : "4",
        "Clasificacion" : "+12",
        "TipoB": "Premiun", 
        "Horarios": {
            "1": "3:30" , "2": "6:30", "3": "9:30"
        } 
    },
    "Pelicula4" : {
        "Nombre": "Batman",
        "Duracion": "2 horas" ,
        "Precio" : "4",
        "Clasificacion" : "+18",
        "TipoB": "Premiun", 
        "Horarios": {
            "1": "2:30" , "2": "4:30", "3": "6:30"
        } 
    },
    "Pelicula5" : {
        "Nombre": "Doctor Strange: En el multiverso de la locura",
        "Duracion": "2 horas" ,
        "Precio" : "4",
        "Clasificacion" : "+12",
        "TipoB": "Premiun", 
        "Horarios": {
            "1": "3:30" , "2": "5:30", "3": "7:30"
        } 
    }
    
}

/* PROCESOS ---------------------------------------------------------------------------------*/
window.onload = inicio; // Establece una funcion de inicio

//Definimos la funcion de inicio ------------------------------------------------------------
function inicio(){
    //Llenamos la tabla con los registros
    var registros = $("#registros");
    var estructura = "";

    estructura = llenarPelicula(localStorage.idPelicula); //Obtenemos en una funcion los datos
    estructura += "<td>" + localStorage.entradas + "</td>";
    estructura += "<td>" + localStorage.horario + "</td>";
    estructura += "<td>" + localStorage.butaca + "</td>";

    registros.html(estructura);
}

//Definimos la funcion para llenar todos los campos "td" de la pelicula ------------------------------
function llenarPelicula(idPelicula, estructura) {
    estructura = "<td>" + idPelicula + "</td>";

    switch( idPelicula ){
        case "1":
            estructura += "<td>" + peliculas.Pelicula1.Nombre + "</td>";
            estructura += "<td>" + peliculas.Pelicula1.Duracion + "</td>";
            estructura += "<td>" + peliculas.Pelicula1.Precio + "</td>";
            estructura += "<td>" + peliculas.Pelicula1.Clasificacion + "</td>";
            break;
        case "2":
            estructura += "<td>" + peliculas.Pelicula2.Nombre + "</td>";
            estructura += "<td>" + peliculas.Pelicula2.Duracion + "</td>";
            estructura += "<td>" + peliculas.Pelicula2.Precio + "</td>";
            estructura += "<td>" + peliculas.Pelicula2.Clasificacion + "</td>";
            break;
        case "3":
            estructura += "<td>" + peliculas.Pelicula3.Nombre + "</td>";
            estructura += "<td>" + peliculas.Pelicula3.Duracion + "</td>";
            estructura += "<td>" + peliculas.Pelicula3.Precio + "</td>";
            estructura += "<td>" + peliculas.Pelicula3.Clasificacion + "</td>";
            break;
        case "4":
            estructura += "<td>" + peliculas.Pelicula4.Nombre + "</td>";
            estructura += "<td>" + peliculas.Pelicula4.Duracion + "</td>";
            estructura += "<td>" + peliculas.Pelicula4.Precio + "</td>";
            estructura += "<td>" + peliculas.Pelicula4.Clasificacion + "</td>";
            break;
        case "5":
            estructura += "<td>" + peliculas.Pelicula5.Nombre + "</td>";
            estructura += "<td>" + peliculas.Pelicula5.Duracion + "</td>";
            estructura += "<td>" + peliculas.Pelicula5.Precio + "</td>";
            estructura += "<td>" + peliculas.Pelicula5.Clasificacion + "</td>";
            break;
        default:
            estructura += "<td>" + peliculas.Pelicula1.Nombre + "</td>";
            estructura += "<td>" + peliculas.Pelicula1.Duracion + "</td>";
            estructura += "<td>" + peliculas.Pelicula1.Precio + "</td>";
            estructura += "<td>" + peliculas.Pelicula1.Clasificacion + "</td>";
            break;
    }

    return estructura;
}