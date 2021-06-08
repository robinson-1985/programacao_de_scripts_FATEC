/* window.onload = function() {
	document.getElementById('btCadastrar').onclick = function() {
		alert(document.getElementById('txtNome').value);
	}
} */

class Produto {
	constructor(codigo, nome, unidade, valor) {
		this.codigo = codigo;
		this.nome = nome;
		this.unidade = unidade;
		this.valor = valor;
	}
}

var listaProdutos = [];
var posicao = '';

function cadastrar(lista, objeto) {
	lista.push(objeto);
}

function alterar(lista, objeto, pos){
	lista[pos] = objeto;
	
}

function listar(lista, tabela) {
	let auxHtml = '';
	for (let i = 0; i < lista.length; i++) {
		auxHtml += '<tr>'+
							 '<td>'+ lista[i].codigo +'</td>'+
							 '<td>'+ lista[i].nome +'</td>'+
							 '<td>'+ lista[i].unidade +'</td>'+
							 '<td>'+ lista[i].valor +'</td>'+
							 '<td>'+
							 '<button class="btn btn-warning btAlterar" rel="'+ i +'">'+
							 	 'A'+
							 '</button>'+
							 '</td>'+
							 '</tr>';
	}
	$(tabela).html(auxHtml);
	//document.getElementById(tabela).innerHTML = auxHtml;
}

$(document).ready(function() {
	$('#btSalvar').click(function() {
		// codigo = document.getElementById('txtCodigo').value;
		codigo = $('#txtCodigo').val();
		nome = $('#txtNome').val();
		unidade = $('#txtUnidade').val();
		valor = $('#txtValor').val();
		produto = new Produto(codigo, nome, unidade, valor);
		if(posicao != ''){
			alterar(listaProdutos, produto, posicao);
			posicao = '';
		}
		else{
			cadastrar(listaProdutos, produto);
		}
		$('input').val('');
		listar(listaProdutos, '#tbodyTabelaProduto');
	});

	$(document).on('click', '.btAlterar', function() {
		posicao = $(this).attr('rel');
		$('#txtCodigo').val(listaProdutos[posicao].codigo);
		$('#txtNome').val(listaProdutos[posicao].nome);
		$('#txtUnidade').val(listaProdutos[posicao].unidade);
		$('#txtValor').val(listaProdutos[posicao].valor);
	});

	$('#btAJAX').click(function(){
		$.ajax({
			url: 'http://date.jsontest.com/',
			method: 'GET'
		})
		.done(function(response){
			$('#infoAJAX').html(response.date +' - '+ response.time);
		});
	});

	$('#btJSON').click(function(){
		$('#infoJSON').html(JSON.stringify(listaProdutos));
	});
});