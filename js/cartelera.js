const objJSON = {
    "Pelicula1" : {
        "Nombre": "Venom 2: Habrá matanza",
        "Duracion": "2 horas" ,
        "Precio" : "2.53",
        "Clasificacion" : "+12",
        "TipoB": "Premiun", 
        "Horarios": {
            "1": "4:30" , "2": "6:30", "3": "8:30"
        },
        "img" : "https://www.lifeboxset.com/wp-content/uploads/2020/01/20200110_161713926344-vvdmvn88xby31-292x365.png"
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


window.onload = start;
function start(){
    var number = 0;
    //vamos a leer el documento JSON para poderm obtener las peliculas
    for (const key in objJSON) {
        number++; 
        var card = ` <div class="card" id='${key}'>
        <input type="hidden" value="${number}" />
        <div class="image">
            <img src="img/venom2.jpg" alt="">
        </div>
        <div class="info">
            <h2>
                ${objJSON[key].Nombre}
            </h2>
            <p>
                <span class="bolder">
                    Duración:
                </span>
                ${objJSON[key].Duracion}
            </p>
            <p><span class="bolder">Clasificación: </span>
            R
            </p>
            <p><span class="bolder">
                Tipo de butacas:
            </span>
                ${objJSON[key].TipoB}
            </p>
            <div class="presentacion">
                <p><span class="bolder">Horarios de presentación</span></p>
              <div class="horas">`;
            const a = objJSON[key].Horarios;
             for(const horario in a){
                card+= `<div class="hora">
                    ${a[horario]}
                </div>`
            }
          
            card += `</div>
            
            </div>
          
            <div>
                <button class="btn" id='btn_${number}}' value='${number}'>Comprar</button>
            </div>
        </div>
       
    </div>`;


        document.getElementById('pelis').innerHTML+= card;
    }


    //vamos a ver que boton le damos click
    var cartas = document.getElementsByClassName('card')
    for(let div of cartas){
        div.addEventListener('click', function(e){
            const clicked = e.target;
           if(clicked.tagName == "BUTTON"){ 
                localStorage.setItem('idPelicula', clicked.value);
                window.location = 'compra/index.html'
            }
        })
    }
}

