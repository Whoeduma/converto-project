function ConverterReal() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmRealNumerico = valorEmDolarNumerico * 5.24;
    console.log(valorEmRealNumerico);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = " R$: " + valorEmRealNumerico;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function ConverterWon() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmWonNumerico = valorEmDolarNumerico * 1.17176;
    console.log(valorEmWonNumerico);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = " ₩: " + valorEmWonNumerico;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function ConverterEuro(){
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmWonNumerico = valorEmDolarNumerico * 0.93;
    console.log(valorEmWonNumerico);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = " € " + valorEmWonNumerico;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
 
  
  function ConverterBitcoin() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmBitcoinNumerico = valorEmDolarNumerico * 0.000021;
    console.log(valorEmBitcoinNumerico);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = " ₿: " + valorEmDolarNumerico;
    elementoValorConvertido.innerHTML = valorConvertido;
  }

//meu deus nada da certooooooooooooooooooooooooooo
//ta uma das vezes foi pq errei na variavel
//MEU DEUS MEU SENHOR ME AJUDA PORFAVOR