console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo
const video1 = document.getElementById("video1")
const video2 = document.getElementById("video2")
const video3 = document.getElementById("video3")
const imagenfija = document.getElementById("imagenfija")
const pantalla_general = document.getElementById("pantalla_general")

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
pantalla_general.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";

//-- Obtener los botones
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");

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
  imagenfija.style.border = '4px solid black';

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
  imagenfija.style.border = '4px solid black';

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
  imagenfija.style.border = '4px solid black';

  pantalla_general.play();
};

// Mejoras
boton4.onclick = () => {
  console.log("Video4");
  pantalla_general.src = null;
  pantalla_general.poster = imagenfija.src;

  video1.muted = true;
  video2.muted = true;
  video3.muted = true;

  video1.style.border = '4px solid black';
  video2.style.border = '4px solid black';
  video3.style.border = '4px solid black';
  imagenfija.style.border = '4px solid green';
};

const automatico = document.getElementById("automatico");
const normal = document.getElementById("normal");
var condicion = false;
var init;
var finish;
var count;

automatico.onclick = () => {
  console.log('Modo bucle');
  automatico.style.border = '5px solid green';
  normal.style.border = '5px solid black';
  init = pantalla_general.currentTime;
  finish = init + 3;
  condicion = true;
  video1.muted = true;
  video2.muted = true;
  video3.muted = true;

  if (video1.style.border == '4px solid green'){
    count = 0;
  }
  if (video2.style.border == '4px solid green'){
    count = 1;
  }
  if (video3.style.border == '4px solid green'){
    count = 2;
  }
}

setInterval(()=>{
  if(condicion){
    if (count > 2) {
      count = 0;
    }
    if (pantalla_general.currentTime > finish){
        if (count == 0) {
          pantalla_general.src= video1.src;
          pantalla_general.currentTime = video1.currentTime;
        }else if (count == 1) {
          pantalla_general.src= video2.src;
          pantalla_general.currentTime = video2.currentTime;
        }else {
          pantalla_general.src= video3.src;
          pantalla_general.currentTime = video3.currentTime;
        }
        pantalla_general.play();
        pantalla_general.currentTime = init;
        count = count + 1;
    }
    console.log(count);
  }
},3000);

normal.onclick = () => {
  console.log('Modo normal');
  condicion = false;
  automatico.style.border = '4px solid black';
  normal.style.border = '4px solid green';

  if (video1.style.border == '4px solid green'){
    pantalla_general.src= video1.src;
    pantalla_general.currentTime = video3.currentTime;

  }
  if (video2.style.border == '4px solid green'){
    pantalla_general.src= video2.src;
    pantalla_general.currentTime = video2.currentTime;
  }
  if (video3.style.border == '4px solid green'){
    pantalla_general.src= video3.src;
    pantalla_general.currentTime = video3.currentTime;
  }
  pantalla_general.play();
}
