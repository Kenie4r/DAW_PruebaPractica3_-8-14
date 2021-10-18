/* DATOS PELICULAS ------------------------------------------------------------------------------*/
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

/* PROCESOS ------------------------------------------------------------------------------------*/
window.onload = inicio; // Establece una funcion de inicio

//Definimos la funcion de inicio ----------------------------------------
function inicio(){
    var btnSubmit = document.getElementById("btnComprar"); //Boton para comprar
    var idPelicula = localStorage.idPelicula; //Obtenemos del localstorage la pelicula seleccionada

    llenarPelicula(idPelicula); //Llenamos los datos de la pelicula a partir del id

    //Colocamos una funcion para manejar la compra
    btnSubmit.addEventListener("click", function(){
        enviarFormulario();
    });
}

//Definimos la funcion de compra ----------------------------------------
function enviarFormulario() {
    var pelicula = $("#titulo-pelicula").html();
    var usuario = $("#txtName").val();
    var entradas = $("#nEntrada").val();
    var horario = $('input:radio[name=horario]:checked').val();
    var butaca = $("#tipoButaca").html();
    var errores = 0;
    var url = "factura.html";

    //Validamos los campos
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
        //Guardamos los datos en localstorage de la compra, para usarlos en otras partes
        localStorage.setItem( "cliente", usuario );
        localStorage.setItem( "pelicula", pelicula );
        localStorage.setItem( "entradas", entradas );
        localStorage.setItem( "horario", horario );
        localStorage.setItem( "butaca", butaca );

        alert( "Su compra se ha registrado con éxito." );

        //Dirigimos al usuario a la factura
        $(location).attr('href',url);
    }else{
        alert("Complete correctamente los campos.");
    }
}

//Definimos la funcion para llenar todos los campos de la pelicula a partir de un id ------------
function llenarPelicula(idPelicula) {

    //Llenamos los campos, a partir de brindarle un array elegido por el id
    switch( idPelicula ){
        case "1":
            llenarCampos(peliculas.Pelicula1);
            break;
        case "2":
            llenarCampos(peliculas.Pelicula2);
            break;
        case "3":
            llenarCampos(peliculas.Pelicula3);
            break;
        case "4":
            llenarCampos(peliculas.Pelicula4);
            break;
        case "5":
            llenarCampos(peliculas.Pelicula5);
            break;
        default:
            llenarCampos(peliculas.Pelicula1);
            break;
    }
}

//Definimos la funcion para llenar los contenedores con los datos de un array -----------
function llenarCampos(array) {
    var titulo = document.getElementById("titulo-pelicula");
    var poster = document.getElementById("poster-pelicula");
    var butaca = document.getElementById("tipoButaca");
    
    titulo.innerHTML = array.Nombre;
    poster.src = "../" + array.img;
    llenarHorario(array.Horarios);
    butaca.innerText = array.TipoB;
}

//Definimos la funcion para rellenar los horarios -------------------------------------------
function llenarHorario(array) {
    var horarios = document.getElementById("horarios-peliculas");

    for(var hora in array){
        horarios.innerHTML += ( horarioRadio(array[hora]) );
    }
}

//Definimos la funcion para crear la estructura de un radio --------------------------------
function horarioRadio(hora) {
    var elemento = "";
    elemento = "<div class='radio-contenedor'>";
    elemento += "<input type='radio' name='horario' id='horario' value='" + hora + "'>"
    elemento += "<p>" + hora + "</p>"
    elemento += "</div>";
    return elemento;
}