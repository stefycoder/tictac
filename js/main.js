$(document).ready(function() {
var x = "x";
var o = "o";
var count = 0;
$('#juego li').click(function(){
	if ($("#uno").hasClass('o') && $("#dos").hasClass('o') && $("#tres").hasClass('o') || $("#cuatro").hasClass('o') && $("#cinco").hasClass('o') && $("#seis").hasClass('o') || $("#siete").hasClass('o') && $("#ocho").hasClass('o') && $("#nueve").hasClass('o') || $("#uno").hasClass('o') && $("#cuatro").hasClass('o') && $("#siete").hasClass('o') || $("#dos").hasClass('o') && $("#cinco").hasClass('o') && $("#ocho").hasClass('o') || $("#tres").hasClass('o') && $("#seis").hasClass('o') && $("#nueve").hasClass('o') || $("#uno").hasClass('o') && $("#cinco").hasClass('o') && $("#nueve").hasClass('o') || $("#tres").hasClass('o') && $("#cinco").hasClass('o') && $("#siete").hasClass('o')){
		alert('ya termino el juego. ¡Dale nuevo juego!')
		$("#juego li").text("+");
		$("#juego li").removeClass('disable')
		$("#juego li").removeClass('o')
		$("#juego li").removeClass('x')
		$("#juego li").removeClass('btn-primary')
		$("#juego li").removeClass('btn-danger')
}
	else if ($("#uno").hasClass('x') && $("#dos").hasClass('x') && $("#tres").hasClass('x') || $("#cuatro").hasClass('x') && $("#cinco").hasClass('x') && $("#seis").hasClass('x') || $("#siete").hasClass('x') && $("#ocho").hasClass('x') && $("#nueve").hasClass('x') || $("#uno").hasClass('x') && $("#cuatro").hasClass('x') && $("#siete").hasClass('x') || $("#dos").hasClass('x') && $("#cinco").hasClass('x') && $("#ocho").hasClass('x') || $("#tres").hasClass('x') && $("#seis").hasClass('x') && $("#nueve").hasClass('x') || $("#uno").hasClass('x') && $("#cinco").hasClass('x') && $("#nueve").hasClass('x') || $("#tres").hasClass('x') && $("#cinco").hasClass('x') && $("#siete").hasClass('x')){
		alert('ya termino el juego. ¡Dale nuevo juego!')
		$("#juego li").text("+");
		$("#juego li").removeClass('disable')
		$("#juego li").removeClass('o')
		$("#juego li").removeClass('x')
		$("#juego li").removeClass('btn-primary')
		$("#juego li").removeClass('btn-danger')	
	}
	else if (count == 9){
		alert('Empate juega otra vez')
		$("#juego li").text("+");
		$("#juego li").removeClass('disable')
		$("#juego li").removeClass('o')
		$("#juego li").removeClass('x')
		$("#juego li").removeClass('btn-primary')
		$("#juego li").removeClass('btn-danger')
		count = 0
	}
	else if ($(this).hasClass('disable')){
		alert('Esta casilla ya esta marcada elige otra')
	}
	else if (count%2 == 0){
		count++
		$(this).text(o)
		$(this).addClass('disable o btn-primary')
	if ($("#uno").hasClass('o') && $("#dos").hasClass('o') && $("#tres").hasClass('o') || $("#cuatro").hasClass('o') && $("#cinco").hasClass('o') && $("#seis").hasClass('o') || $("#siete").hasClass('o') && $("#ocho").hasClass('o') && $("#nueve").hasClass('o') || $("#uno").hasClass('o') && $("#cuatro").hasClass('o') && $("#siete").hasClass('o') || $("#dos").hasClass('o') && $("#cinco").hasClass('o') && $("#ocho").hasClass('o') || $("#tres").hasClass('o') && $("#seis").hasClass('o') && $("#nueve").hasClass('o') || $("#uno").hasClass('o') && $("#cinco").hasClass('o') && $("#nueve").hasClass('o') || $("#tres").hasClass('o') && $("#cinco").hasClass('o') && $("#siete").hasClass('o')){
		alert('jugador o gano')
		}
	}
	else{
		count++
		$(this).text(x)
		$(this).addClass('disable x btn-danger')
	if ($("#uno").hasClass('x') && $("#dos").hasClass('x') && $("#tres").hasClass('x') || $("#cuatro").hasClass('x') && $("#cinco").hasClass('x') && $("#seis").hasClass('x') || $("#siete").hasClass('x') && $("#ocho").hasClass('x') && $("#nueve").hasClass('x') || $("#uno").hasClass('x') && $("#cuatro").hasClass('x') && $("#siete").hasClass('x') || $("#dos").hasClass('x') && $("#cinco").hasClass('x') && $("#ocho").hasClass('x') || $("#tres").hasClass('x') && $("#seis").hasClass('x') && $("#nueve").hasClass('x') || $("#uno").hasClass('x') && $("#cinco").hasClass('x') && $("#nueve").hasClass('x') || $("#tres").hasClass('x') && $("#cinco").hasClass('x') && $("#siete").hasClass('x')){
		alert('jugador x gano')
	}
	}
	});
	$("#reset").click(function () {
	$("#juego li").text("+");
	$("#juego li").removeClass('disable')
	$("#juego li").removeClass('o')
	$("#juego li").removeClass('x')
	$("#juego li").removeClass('btn-primary')
	$("#juego li").removeClass('btn-danger')
	count = 0
});
})