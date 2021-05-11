/*var resultado = '';

function mostrarMensagem(texto,nome) {
	alert(texto + nome);
}

txtCompromisso
btAdicionar

function efetuarAdicao(valor1,valor2) {
	return valor1 + valor2;
}

mostrarMensagem('Exemplo ', 'Giuliano');

resultado = efetuarAdicao(5,4);
alert(resultado);*/

var listaCompromissos = [];
var compromisso = '';
var auxHtml = '';

function identificarCompromisso(novoCompromisso,lista) {
	var auxExiste = false;
	for (var j = 0; j < lista.length; j++) {
		if (novoCompromisso == lista[j])
			auxExiste = true;
	}
	return auxExiste;
}

window.onload = function() {
	document.getElementById('btAdicionar').onclick = function() {
		compromisso = document.getElementById('txtCompromisso').value;
		if (identificarCompromisso(compromisso, listaCompromissos)) 
		{
			alert('O compromisso já foi adicionado!');
		} 
		else 
		{
			listaCompromissos.push(compromisso);
			document.getElementById('txtCompromisso').value = '';

			auxHtml = '';
			for (var i = 0; i < listaCompromissos.length; i++) 
			{
				auxHtml += '<li>'+ listaCompromissos[i] +'</li>';
			}
			document.getElementById('lsCompromissos').innerHTML = auxHtml;
		}
	}
}