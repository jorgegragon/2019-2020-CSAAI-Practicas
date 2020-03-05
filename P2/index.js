console.log("Inicio");

const guia = {
  resultado: document.getElementById('resultado'),
  numero1: document.getElementById('numero1'),
  numero2: document.getElementById('numero2'),
  numero3: document.getElementById('numero3'),
  numero4: document.getElementById('numero4'),
  numero5: document.getElementById('numero5'),
  numero6: document.getElementById('numero6'),
  numero7: document.getElementById('numero7'),
  numero8: document.getElementById('numero8'),
  numero9: document.getElementById('numero9')
}

const calculo = {
  valor : 0,

  suma : function(valor1, valor2) {
    this.valor += valor1 + valor2;
    guia.resultado.innerHTML = this.valor;
}
}



guia.numero1.onclick = () => {
    console.log("Click obtenido");
    calculo.suma(1,1);
}
