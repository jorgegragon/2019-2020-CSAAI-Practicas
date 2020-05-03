console.log("Ejecutando JS...");

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");
var titulos = document.getElementById("titulo");
var goles;
var start = false;
var singleplayer = true;

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");
var marcadorD = 0;
var marcadorI = 0;
//-- Pintar todos los objetos en el canvas
function draw() {
  //----- Dibujar la Bola
  bola.draw();

  //-- Dibujar las raquetas
  raqI.draw();
  raqD.draw();

  //--------- Dibujar la red
  ctx.beginPath();

  //-- Estilo de la linea: discontinua
  //-- Trazos de 10 pixeles, y 10 de separacion
  ctx.setLineDash([10, 10]);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  //-- Punto superior de la linea. Su coordenada x está en la mitad
  //-- del canvas
  ctx.moveTo(canvas.width/2, 0);

  //-- Dibujar hasta el punto inferior
  ctx.lineTo(canvas.width/2, canvas.height);
  ctx.stroke();

  //------ Dibujar el tanteo
  ctx.font = "50px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(marcadorI, 240, 80);
  ctx.fillText(marcadorD, 330, 80);
}

//---- Bucle principal de la animación
function animacion() {

    //-- Actualizar las posiciones de los objetos móviles

    //-- Actualizar la raqueta con la velocidad actual
    raqI.update();
    raqD.update();

    if (singleplayer) {
      raqD.y = bola.y;
    }

    //-- Comprobar si la bola ha alcanzado el límite derecho
    //-- Si es así, se cambia de signo la velocidad, para
    // que "rebote" y vaya en el sentido opuesto
    if (bola.x >= canvas.width) {
      //-- Hay colisión. Cambiar el signo de la bola
      marcadorI = marcadorI + 1;
      bola.init();

      //-- Darle velocidad
      bola.vx = bola.vx_ini;
      bola.vy = 0;
    }
    if (bola.x <= 0) {
      //-- Hay colisión. Cambiar el signo de la bola
      marcadorD = marcadorD + 1;
      bola.init();

      //-- Darle velocidad
      bola.vx = -(bola.vx_ini);
      bola.vy = 0;
    }

    if (marcadorD == 5) {
      goles = "Ganador Jugador Derecha";
      document.getElementById("titulo").innerHTML = goles;
      marcadorD = 0;
      marcadorI = 0;
      start = false;
      bola.init();
    }else if (marcadorI == 5) {
      goles = "Ganador Jugador Izquierda";
      document.getElementById("titulo").innerHTML = goles;
      marcadorD = 0;
      marcadorI = 0;
      start = false;
      bola.init();
    }

    //-- Comprobar si hay colisión con la raqueta izquierda
    if (bola.x >= raqI.x && bola.x <=(raqI.x + raqI.width) &&
        bola.y >= raqI.y && bola.y <=(raqI.y + raqI.height) ||
        bola.x >= raqD.x && bola.x <=(raqD.x + raqD.width) &&
        bola.y >= raqD.y && bola.y <=(raqD.y + raqD.height)) {
          bola.vx = (bola.vx * -1);
          bola.vy = (getRandomArbitrary(-3, 3) * -1);
    }

    if (bola.y >= canvas.height || bola.y <= 0) {
          bola.vy = (bola.vy * -1);
    }

    //-- Actualizar coordenada x de la bola, en funcion de
    //-- su velocidad
    if (start) {
      bola.update()
    }

    //-- Borrar la pantalla
    ctx.clearRect(0,0, canvas.width, canvas.height);

    //-- Dibujar el nuevo frame
    draw();
}

//-- Inicializa la bola: Llevarla a su posicion inicial
const bola = new Bola(ctx);

//-- Crear las raquetas
const raqI = new Raqueta(ctx);
const raqD = new Raqueta(ctx);

raqI.y_ini = 180;
raqI.init();
//-- Cambiar las coordenadas de la raqueta derecha
raqD.x_ini = 540;
raqD.y_ini = 180;
raqD.init();

//-- Arrancar la animación
setInterval(()=>{
  animacion();
},16);

//-- Retrollamada de las teclas
window.onkeydown = (e) => {

  switch (e.key) {
    case "a":
      if (raqI.y<366) {
        raqI.v = raqI.v_ini;
      }
      break;
    case "q":
      if (raqI.y>9) {
        raqI.v = raqI.v_ini * -1;
      }
      break;
    case "p":
      if (raqD.y > 9){
        raqD.v = raqD.v_ini * -1;
      }
      break;
    case "l":
      if (raqD.y < 366) {
        raqD.v = raqD.v_ini;
      }
      break;
    case " ":
      //-- Llevar bola a su posicion incicial
      start = true;
      var dificultad = document.getElementById("mech1_anime").value;
      if (dificultad == "medio") {
        bola.vx_ini = 4.5;
      }else if (dificultad == "dificil") {
        bola.vx_ini = 6;
      }else {
        bola.vx_ini = 3;
      }

      var jugadores = document.getElementById("mech2_anime").value;
      if (jugadores == "one") {
        singleplayer = true;
      }else{
        singleplayer = false;
      }

      bola.init();
      console.log(dificultad);
      //-- Darle velocidad
      bola.vx = bola.vx_ini;
      bola.vy = bola.vy_ini;
      goles = "Bienvenido al Pong";
      document.getElementById("titulo").innerHTML = goles;
    default:
  }
}

//-- Retrollamada de la liberacion de teclas
window.onkeyup = (e) => {
  if (e.key == "a" || e.key == "q"){
    //-- Quitar velocidad de la raqueta
    raqI.v = 0;
  }

  if (e.key == "p" || e.key == "l") {
    raqD.v = 0;
  }
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
