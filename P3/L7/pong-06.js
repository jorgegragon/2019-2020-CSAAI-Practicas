console.log("Ejecutando JS...");

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

//-- Pintar todos los objetos en el canvas
function draw() {
  //-- Codigo de la funcion Draw()...
  //-- ......
}

//---- Bucle principal de la animación
function animacion()
{

  //-- Actualizar las posiciones de los objetos móviles
  //-- De momento no lo estamos haciendo

  //-- Borrar la pantalla
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //-- Dibujar el nuevo frame
  draw();

  //-- Mostrar actividad en la consola
  //-- Para comprobar que "está vivo",
  //-- aunque no se mueva nada en la pantalla
  //-- todavía
  console.log("Frame!");
}

//-- Arrancar la animación
setInterval(()=>{
  animacion();
},16);
