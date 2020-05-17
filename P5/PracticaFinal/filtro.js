console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
var img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');

//-- Acceso al deslizador
const deslizadorR = document.getElementById('deslizadorR');
const deslizadorG = document.getElementById('deslizadorG');
const deslizadorB = document.getElementById('deslizadorB');

//-- Valor del deslizador
const range_valueR = document.getElementById('range_valueR');
const range_valueG = document.getElementById('range_valueG');
const range_valueB = document.getElementById('range_valueB');

const grises = document.getElementById('grises');
const originals = document.getElementById('originals');
const color_sepia = document.getElementById('color_sepia');
const color_invertido = document.getElementById('color_invertido');

var decision = document.getElementById('mech1_anime');

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

function gray() {

    var imgW = img.width;
    var imgH = img.height;
    canvas.width = imgW;
    canvas.height = imgH;

    ctx.drawImage(img, 0, 0);
    var imgPixels = ctx.getImageData(0, 0, imgW, imgH);

    for(var y = 0; y < imgPixels.height; y++){
        for(var x = 0; x < imgPixels.width; x++){
            var i = (y * 4) * imgPixels.width + x * 4;
            var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
            imgPixels.data[i] = avg;
            imgPixels.data[i + 1] = avg;
            imgPixels.data[i + 2] = avg;
        }
    }
    ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    return canvas.toDataURL();
}

function sepia() {
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        pixels = imageData.data,
        numPixels = imageData.width * imageData.height;

    for ( var i = 0; i < numPixels; i++ ) {
        var r = pixels[ i * 4 ];
        var g = pixels[ i * 4 + 1 ];
        var b = pixels[ i * 4 + 2 ];

        pixels[ i * 4 ] = 255 - r;
        pixels[ i * 4 + 1 ] = 255 - g;
        pixels[ i * 4 + 2 ] = 255 - b;

        pixels[ i * 4 ] = ( r * .393 ) + ( g *.769 ) + ( b * .189 );
        pixels[ i * 4 + 1 ] = ( r * .349 ) + ( g *.686 ) + ( b * .168 );
        pixels[ i * 4 + 2 ] = ( r * .272 ) + ( g *.534 ) + ( b * .131 );
    }

    ctx.putImageData( imageData, 0, 0 );
};

function negativo() {
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        pixels = imageData.data,
        numPixels = imageData.width * imageData.height;

    for ( var i = 0; i < numPixels; i++ ) {
        var r = pixels[ i * 4 ];
        var g = pixels[ i * 4 + 1 ];
        var b = pixels[ i * 4 + 2 ];

        pixels[ i * 4 ] = 255 - r;
        pixels[ i * 4 + 1 ] = 255 - g;
        pixels[ i * 4 + 2 ] = 255 - b;
    }

    ctx.putImageData( imageData, 0, 0 );
};

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

  grises.onclick = () => {
    console.log("Escala grises");
    gray();
  };

  originals.onclick = () => {
    console.log("Original");
    img.onload();
  };

  color_sepia.onclick = () => {
    console.log("Color sepia");
    sepia();
  };

  color_invertido.onclick = () => {
    console.log("Color invertido");
    negativo();
  };

  decision.onchange = () => {
    var selector = document.getElementById('mech1_anime').value;

    if (selector == "medio") {
      document.getElementById("imagesrc").src = "imagenes/loros.png";
      console.log("loros");
      img.onload();
    }else if (selector == "dificil") {
      document.getElementById("imagesrc").src = "imagenes/cruceros.png";
      img.onload();
    }else {
      document.getElementById("imagesrc").src = "imagenes/GOT.png";
      console.log("GOT");
      img.onload();
    }
    console.log(selector);
}

console.log("Fin...");
