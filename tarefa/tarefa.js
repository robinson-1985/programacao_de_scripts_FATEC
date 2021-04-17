var nota1 = '';
var nota2 = '';
var recuperacao = '';
var media = '';
var mediaRecuperacao = '';


function calcularMedia(valor1,valor2) {
	return (valor1 + valor2) / 2;
}

function calcularRecuperacao(valor1,valor2){
	return (valor1 + valor2) / 2;
}

window.onload = function() {
	document.getElementById('btCalcular').onclick = function() {
		nota1 = parseFloat(document.getElementById('nbNota1').value);
		nota2 = parseFloat(document.getElementById('nbNota2').value);
		recuperacao = parseFloat(document.getElementById('nbRecuperacao').value);
		media = calcularMedia(nota1, nota2);
		
		if (media >= 6) {
			alert('Aprovado!')
		}
		else{
			alert('Recuperação!');
            recuperacao = media;
			if(nota1 < nota2){
				media = calcularMedia(recuperacao, nota2);
				if(media >=6){
					alert('Você foi aprovado!');
				}
				else{
					alert('Você foi reprovado!')
				}
			}
			else if(nota2 < nota1){
				media = calcularMedia(nota1,recuperacao);
				if(media >= 6){
					alert('Você foi aprovado na recuperação!')
				}
				else{
					alert('Você foi reprovado na recuperação!');
				}
			}
		}
		document.getElementById('spResultado').innerHTML = media;
	}
}