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

/* PROCESOS */
window.onload = inicio; // Establece una funcion de inicio

//Definimos la funcion de inicio
function inicio(){
    var btnSubmit = document.getElementById("btnComprar");
    var idPelicula = localStorage.idPelicula;
    alert(idPelicula);
    if( isNaN(idPelicula) ){
        idPelicula = 1;
    }

    llenarPelicula(idPelicula);

    btnSubmit.addEventListener("click", function(){
        enviarFormulario();
    });
}

//Definimos la funcion de compra
function enviarFormulario() {
    var entradas = $("#nEntrada").val();
    var horario = $('input:radio[name=horario]:checked').val();
    var butaca = $('input:radio[name=tipoButaca]:checked').val();
    var errores = 0;

    if( entradas == undefined ){
        errores++;
    }else if( isNaN(entradas) ){
        errores++;
    }else if( entradas == "" ){
        errores++;
    }else if( entradas <= 0 ){
        errores++;
    }
    if( horario == undefined ){
        errores++;
    }
    if( butaca == undefined ){
        errores++;
    }

    if( errores == 0 ){
        localStorage.setItem( "entradas", entradas );
        localStorage.setItem( "horario", horario );
        localStorage.setItem( "butaca", butaca );

        alert( "Su compra se ha registrado con éxito." );
    }else{
        alert("Complete correctamente los campos.");
    }
}

//Definimos la funcion para llenar todos los campos de la pelicula
function llenarPelicula(idPelicula) {
    var titulo = document.getElementById("titulo-pelicula");
    var poster = document.getElementById("poster-pelicula");

    switch( idPelicula ){
        case 1:
            titulo.innerHTML = peliculas.Pelicula1.Nombre;
            poster.src = "../img/venom2.jpg";
            llenarHorario(peliculas.Pelicula1.Horarios);
            break;
        case 1:
            titulo.innerHTML = peliculas.Pelicula2.Nombre;
            break;
        case 1:
            titulo.innerHTML = peliculas.Pelicula3.Nombre;
            break;
        case 1:
            titulo.innerHTML = peliculas.Pelicula4.Nombre;
            break;
        case 1:
            titulo.innerHTML = peliculas.Pelicula5.Nombre;
            break;
    }
}

//Definimos la funcion para rellenar los horarios
function llenarHorario(array) {
    var horarios = document.getElementById("horarios-peliculas");

    for(var hora in array){
        horarios.innerHTML += ( horarioRadio(array[hora]) );
    }
}

//Definimos la funcion para crear la estructura de un radio
function horarioRadio(hora) {
    var elemento = "";
    elemento = "<div>";
    elemento += "<input type='radio' name='horario' id='horario' value='" + hora + "'>"
    elemento += "<label>" + hora + "</label>"
    elemento += "</div>";
    return elemento;
}