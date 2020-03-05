console.log("Ejecutando JS...");

display = document.getElementById("display")
suma = document.getElementById("suma")
igual = document.getElementById("igual")
clear = document.getElementById("clear")

let digitos = document.getElementsByClassName("cdigito");
let operaciones = document.getElementsByClassName("operaciones");

for (var i = 0; i < digitos.length; i++) {
  digitos[i].onclick = (ev) =>{
    digito(ev.target);
  }
}

for (var i = 0; i < operaciones.length; i++) {
  operaciones[i].onclick = (ev) =>{
    operacion(ev.target);
  }
}

// -- Insertar digito 1
function digito(boton) {

  if (display.innerHTML == "0"){
    display.innerHTML = boton.value;
  }else{
    display.innerHTML += boton.value;
  }
}

function operacion(signo) {

  display.innerHTML += signo.value;
}



//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
}
