console.log("Inicio");
var valor = "0";

const resultado=document.getElementById('resultado')
const numero1=document.getElementById('numero1')
const numero2=document.getElementById('numero2')
const numero3=document.getElementById('numero3')
const numero4=document.getElementById('numero4')
const numero5=document.getElementById('numero5')
const numero6=document.getElementById('numero6')
const numero7=document.getElementById('numero7')
const numero8=document.getElementById('numero8')
const numero9=document.getElementById('numero9')



numero1.onclick = () => {
    console.log("Click obtenido");
    if (valor == "0"){
      valor = "1";
    }else{
      valor += "1";
    }
    document.getElementById("resultado").value = valor;
}
