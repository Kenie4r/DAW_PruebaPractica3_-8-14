/* PROCESOS */
window.onload = inicio; // Establece una funcion de inicio

//Definimos la funcion de inicio
function inicio(){
    var cliente = $("#cliente");
    var pelicula = $("#factura-pelicula");
    var entradas = $("#factura-n-entradas");
    var horario = $("#factura-horario");
    var butaca = $("#factura-butaca");

    cliente.html( "<span>A nombre de:</span> " + localStorage.cliente );
    pelicula.html( "<span>Pelicula seleccionada:</span> " + localStorage.pelicula );
    entradas.html( "<span>Cantidad de entradas:</span> " + localStorage.entradas );
    horario.html( "<span>Cantidad de entradas:</span> " + localStorage.horario );
    butaca.html( "<span>Cantidad de entradas:</span> " + localStorage.butaca );
}