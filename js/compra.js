/* DATOS PELICULAS */
/* A partir de este objeto JSON obtenemos los datos de las peliculas en cartelera */
const peliculas  = {
    "Pelicula1" : {
        "Nombre": "Venom 2: Habrá matanza",
        "Duracion": "2 horas" ,
        "Precio" : "2.53",
        "Clasificacion" : "+12",
        "TipoB": "Ecoamigable", 
        "Horarios": {
            "1": "4:30" , "2": "6:30", "3": "8:30"
        },
        "img" : "img/venom2.jpg"
    }, "Pelicula2" : {
        "Nombre": "BlackWidown",
        "Duracion": "2 horas" ,
        "Precio" : "3",
        "Clasificacion" : "+12",
        "TipoB": "Normal", 
        "Horarios": {
            "1": "5:00" , "2": "7:00", "3": "9:00"
        },
        "img" : "img/blackwidow.jpg"
    },
    "Pelicula3" : {
        "Nombre": "Spider-Man: No way Home",
        "Duracion": "3 horas" ,
        "Precio" : "4",
        "Clasificacion" : "+12",
        "TipoB": "Cuero exportado", 
        "Horarios": {
            "1": "3:30" , "2": "6:30", "3": "9:30"
        },
        "img": "img/spirderman.jpg"
    },
    "Pelicula4" : {
        "Nombre": "Batman",
        "Duracion": "2 horas" ,
        "Precio" : "4",
        "Clasificacion" : "+18",
        "TipoB": "Cuero exportado", 
        "Horarios": {
            "1": "2:30" , "2": "4:30", "3": "6:30"
        }, 
        "img": "img/batman.jpg"
    },
    "Pelicula5" : {
        "Nombre": "Doctor Strange: En el multiverso de la locura",
        "Duracion": "2 horas" ,
        "Precio" : "4",
        "Clasificacion" : "+12",
        "TipoB": "Plastico resistente", 
        "Horarios": {
            "1": "3:30" , "2": "5:30", "3": "7:30"
        }, 
        "img": "img/ds.jpg"
    }
    
}

/* PROCESOS */
window.onload = inicio; // Establece una funcion de inicio

//Definimos la funcion de inicio
function inicio(){
    var btnSubmit = document.getElementById("btnComprar");
    var idPelicula = localStorage.idPelicula;

    llenarPelicula(idPelicula);

    btnSubmit.addEventListener("click", function(){
        enviarFormulario();
    });
}

//Definimos la funcion de compra
function enviarFormulario() {
    var pelicula = $("#titulo-pelicula").html();
    var usuario = $("#txtName").val();
    var entradas = $("#nEntrada").val();
    var horario = $('input:radio[name=horario]:checked').val();
    var butaca = $("#tipoButaca").html();
    var errores = 0;
    var url = "factura.html";

    if( usuario == "" ){
        errores++;
    }else if( !isNaN(usuario) ){
        errores++;
    }
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
        localStorage.setItem( "cliente", usuario );
        localStorage.setItem( "pelicula", pelicula );
        localStorage.setItem( "entradas", entradas );
        localStorage.setItem( "horario", horario );
        localStorage.setItem( "butaca", butaca );

        alert( "Su compra se ha registrado con éxito." );

        $(location).attr('href',url);
    }else{
        alert("Complete correctamente los campos.");
    }
}

//Definimos la funcion para llenar todos los campos de la pelicula
function llenarPelicula(idPelicula) {
    var titulo = document.getElementById("titulo-pelicula");
    var poster = document.getElementById("poster-pelicula");
    var butaca = document.getElementById("tipoButaca");

    switch( idPelicula ){
        case "1":
            titulo.innerHTML = peliculas.Pelicula1.Nombre;
            poster.src = "../" + peliculas.Pelicula1.img;
            llenarHorario(peliculas.Pelicula1.Horarios);
            butaca.innerText = peliculas.Pelicula1.TipoB;
            break;
        case "2":
            titulo.innerHTML = peliculas.Pelicula2.Nombre;
            poster.src = "../" + peliculas.Pelicula2.img;
            llenarHorario(peliculas.Pelicula2.Horarios);
            butaca.innerText = peliculas.Pelicula2.TipoB;
            break;
        case "3":
            titulo.innerHTML = peliculas.Pelicula3.Nombre;
            poster.src = "../" + peliculas.Pelicula3.img;
            llenarHorario(peliculas.Pelicula3.Horarios);
            butaca.innerText = peliculas.Pelicula3.TipoB;
            break;
        case "4":
            titulo.innerHTML = peliculas.Pelicula4.Nombre;
            poster.src = "../" + peliculas.Pelicula4.img;
            llenarHorario(peliculas.Pelicula4.Horarios);
            butaca.innerText = peliculas.Pelicula4.TipoB;
            break;
        case "5":
            titulo.innerHTML = peliculas.Pelicula5.Nombre;
            poster.src = "../" + peliculas.Pelicula5.img;
            llenarHorario(peliculas.Pelicula5.Horarios);
            butaca.innerText = peliculas.Pelicula5.TipoB;
            break;
        default:
            titulo.innerHTML = peliculas.Pelicula1.Nombre;
            poster.src = "../img/venom2.jpg";
            llenarHorario(peliculas.Pelicula1.Horarios);
            butaca.innerText = peliculas.Pelicula1.TipoB;
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
    elemento = "<div class='radio-contenedor'>";
    elemento += "<input type='radio' name='horario' id='horario' value='" + hora + "'>"
    elemento += "<p>" + hora + "</p>"
    elemento += "</div>";
    return elemento;
}