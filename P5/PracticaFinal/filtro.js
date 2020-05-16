console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');

//-- Acceso al deslizador
const deslizadorR = document.getElementById('deslizadorR');
const deslizadorG = document.getElementById('deslizadorG');
const deslizadorB = document.getElementById('deslizadorB');

//-- Valor del deslizador
const range_valueR = document.getElementById('range_valueR');
const range_valueG = document.getElementById('range_valueG');
const range_valueB = document.getElementById('range_valueB');

//-- Función de retrollamada de imagen cargada
//-- La imagen no se carga instantaneamente, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
img.onload = function () {

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  console.log("Imagen lista...");
};


function cromatica(){

  ctx.drawImage(img, 0,0);

  // Modificamos valores
  range_valueR.innerHTML = deslizadorR.value;
  range_valueG.innerHTML = deslizadorG.value;
  range_valueB.innerHTML = deslizadorB.value;

  // Obtener la imagen del canvas en pixeles
  var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  // Obtener el array con todos los píxeles
  var data = imgData.data;

  // Obtener los umbrales
  var umbralR = deslizadorR.value;
  var umbralV = deslizadorG.value;
  var umbralA = deslizadorB.value;

  //-- Filtrar la imagen según los nuevos umbrales
  for (var i = 0; i < data.length; i+=4) {
    if (data[i] > umbralR){
      data[i] = umbralR;
    }
    if (data[i+1] > umbralV){
      data[i+1] = umbralV;
    }
    if (data[i+2] > umbralA){
      data[i+2] = umbralA;
    }
  }
  //-- Imagen modificada
  ctx.putImageData(imgData, 0, 0);
}

  //Deslizadores
  deslizadorR.oninput = () => {
    cromatica();
  }

  deslizadorG.oninput = () => {
    cromatica();
  }

  deslizadorB.oninput = () => {
    cromatica();
  }

console.log("Fin...");
