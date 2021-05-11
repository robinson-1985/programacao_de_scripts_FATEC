/* window.onload = function() {
	document.getElementById('btCadastrar').onclick = function() {
		alert(document.getElementById('txtNome').value);
	}
} */

$(document).ready(function() {
	$('#btCadastrar').click(function() {
		alert($('#txtNome').val());
	});

  $('p').click(function(){
    $(this).hide();
  });	
});