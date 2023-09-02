var intervalo = 4000;

function slide1 () {
	document.getElementById ("banner").src = "imgs/banner-1.webp"
	setTimeout("slide2()",intervalo);
}	

function slide2 () {
	document.getElementById ("banner").src = "imgs/banner-2.webp"
	setTimeout("slide3()",intervalo);
}

function slide3 () {
	document.getElementById ("banner").src = "imgs/banner-3.webp"
	setTimeout("slide1()",intervalo);
}

