console.log("Ejecutando...");

const test=document.getElementById('test')

test.onclick = () => {
    console.log("Click obtenido");
    if (test.style.backgroundColor == ""){
      test.style.backgroundColor = "yellow";
    }else{
      test.style.backgroundColor = "";
    }
}
