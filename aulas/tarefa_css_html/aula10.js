var nota1 = '';
var nota2 = '';
var recuperacao = '';
var media = '';
var mediaRecuperacao = '';


function calcularMedia(valor1,valor2) {
	return (valor1 + valor2)/2;
}

function calcularRecuperacao(valor1,valor2){
	return (valor1 + valor2)/2;
}



window.onload = function() {
	document.getElementById('btCalcular').onclick = function() {
		nota1 = parseFloat(document.getElementById('nota1').value);
		nota2 = parseFloat(document.getElementById('nota2').value);
		recuperacao = parseFloat(document.getElementById('recuperacao').value);
		media = calcularMedia(nota1,nota2);
		
		if (media >= 6) {
			alert('Aprovado!')
		}
		else
		{
			alert('Recuperação!');
			if(nota1 < nota2)
			{
				media = calcularMedia(recuperacao,nota2);
				if(media >=6)
				{
					alert('Aprovado!');
				}
				else
				{
					alert('Reprovado!')
				}
			}
			else if(nota2 < nota1)
			{
				media = calcularMedia(nota1,recuperacao);
				if(media >=6)
				{
					alert('Aprovado!')
				}
				else
				{
					alert('Reprovado!');
				}
			}
		}
		document.getElementById('nbResultado').innerHTML = media;
	}
}