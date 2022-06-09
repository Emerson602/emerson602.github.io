

var a = document.getElementById('primeiraRaiz');
var b = document.getElementById('segundaRaiz');
var c = document.getElementById('terceiraRaiz');
var resultado = document.getElementById('resposta');  


const botao = document.getElementById("myBtn");
botao.addEventListener("click", myEquation);    
 




function myEquation() {

  var x = parseInt(b.value) ** 2;
  var y = parseInt(4) * parseInt(a.value) * parseInt(c.value);
  var delta = x - y;  
  var z = parseInt(delta)** (1/2);
  var raiz_1 = document.getElementById('raiz_1');
  var raiz_2 = document.getElementById('raiz_2');  


  if(delta === 0){

    resultado.innerHTML = "Possui uma raiz."; 
    raiz_1.innerHTML = "{" + parseInt((-b.value + z) / (2 * a.value)) + "}";  
    raiz_2.style.display = 'none';     
  }

   if(delta > 0){
    resultado.innerHTML = "Possui duas raizes.";
    raiz_1.innerHTML = "{" + parseInt((-b.value + z) / (2 * a.value)) + "}"; 
    raiz_2.innerHTML = "{" + parseInt((-b.value - z) / (2 * a.value)) + "}";  
  }


  else if(delta < 0) {

  resultado.innerHTML = "Não possui raizes reais.";
  raiz_1.innerHTML = "{vazio}";
  raiz_2.style.display = 'none';    
}    
}


function myMirror1() {
  var coeA = parseInt(a.value);
  document.getElementById("a").innerHTML = coeA + "x²-";  
}

function myMirror2() {
  var coeB = parseInt(b.value);
  document.getElementById("b").innerHTML = coeB  + "x+"; 

  if(parseInt(b.value) < 0){
    document.getElementById("b").innerHTML = "(" +coeB + "x" + ")" + "+";
  } 
} 

function myMirror3() {
  var coeC = parseInt(c.value);
  document.getElementById("c").innerHTML = coeC + "=0";

   if(parseInt(c.value) < 0){
   document.getElementById("c").innerHTML = "(" + coeC + ")" + "=0";
  } 
}



  
  