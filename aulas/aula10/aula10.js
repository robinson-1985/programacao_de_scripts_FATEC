var numero1 = '';
var numero2 = '';
var operacao = '';
var resultado = '';

function calcularAdicao(valor1, valor2){
    return valor1 + valor2;
}

function calcularSubtracao(valor1, valor2){
    return valor1 - valor2;
}

window.onload = function() {
    document.getElementById('btCalcular').onclick = function(){
        numero1 = parseFloat(document.getElementById('nbNumero1').value);
        numero2 = parseFloat(document.getElementById('nbNumero2').value);
        operacao = document.getElementById('slOperacao').value;
        if(operacao == 'adicao') {
            resultado = calcularAdicao(numero1, numero2);
        }
        else{
            resultado = calcularSubtracao(numero1, numero2);
        }

        document.getElementById('spResultado').innerHTML = resultado;  //innerHTMl para receber o HTML
    }
}