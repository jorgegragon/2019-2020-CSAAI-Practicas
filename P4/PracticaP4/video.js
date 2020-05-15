console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo
const video1 = document.getElementById("video1")
const video2 = document.getElementById("video2")
const video3 = document.getElementById("video3")
const pantalla_general = document.getElementById("pantalla_general")

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
pantalla_general.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";

//-- Obtener los botones
const boton1 = document.getElementById("boton1")
const boton2 = document.getElementById("boton2")
const boton3 = document.getElementById("boton3")
var condicion = false;

//-- Función de retrollamada del botón de ver
boton1.onclick = () => {
  console.log("Video1");
  pantalla_general.src= video1.src;
  pantalla_general.currentTime = video1.currentTime;

  video1.muted = false;
  video2.muted = true;
  video3.muted = true;

  video1.style.border = '4px solid green';
  video2.style.border = '4px solid black';
  video3.style.border = '4px solid black';

  pantalla_general.play();
};

boton2.onclick = () => {
  console.log("Video2");
  pantalla_general.src= video2.src;
  pantalla_general.currentTime = video2.currentTime;

  video1.muted = true;
  video2.muted = false;
  video3.muted = true;

  video1.style.border = '4px solid black';
  video2.style.border = '4px solid green';
  video3.style.border = '4px solid black';

  pantalla_general.play();
};

boton3.onclick = () => {
  console.log("Video3");
  pantalla_general.src= video3.src;
  pantalla_general.currentTime = video3.currentTime;

  video1.muted = true;
  video2.muted = true;
  video3.muted = false;

  video1.style.border = '4px solid black';
  video2.style.border = '4px solid black';
  video3.style.border = '4px solid green';
  condicion = false;

  pantalla_general.play();
};

// Mejoras
const automatico = document.getElementById("automatico");

automatico.onclick = () => {
  condicion = true;
  while (condicion) {
    console.log("hola");
    wait(3000);
  }
}
