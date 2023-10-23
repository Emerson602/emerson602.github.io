const intervalo = 4000;

function slide1 () {
	document.getElementById ("banner").src = "../imgs/bg-1.webp"
	setTimeout("slide2()",intervalo); 
}	

function slide2 () {
	document.getElementById ("banner").src = "../imgs/bg-2.webp"
	setTimeout("slide3()",intervalo);
} 

function slide3 () {
	document.getElementById ("banner").src = "../imgs/bg-3.webp"
	setTimeout("slide1()",intervalo);
} 

function slide4 () {
	document.getElementById ("banner2").src = "../imgs/banner-mobile-1.webp"
	setTimeout("slide5()",intervalo); 
}	

function slide5 () {
	document.getElementById ("banner2").src = "../imgs/banner-mobile-2.webp"
	setTimeout("slide6()",intervalo);
}

function slide6 () {
	document.getElementById ("banner2").src = "../imgs/banner-mobile-3.webp"
	setTimeout("slide4()",intervalo);
} 



