	let words = ["Hello world!", "I'm a...","Web developer."];

function transL(){

				 let btn = document.getElementById("btnImg"); 		
				 let tt = document.getElementById("tt-transl");	
				 let h = document.getElementById("home");
				 let a = document.getElementById("about");				 
				 let s = document.getElementById("skills");
				 let c = document.getElementById("contact");

				 let hmb = document.getElementById("homeMobi");
				 let amb = document.getElementById("aboutMobi");				 
				 let smb = document.getElementById("skillsMobi");
				 let cmb = document.getElementById("contactMobi");

				 let hm = document.getElementById("hire");
				 let rd = document.getElementById("right");
				 let rm = document.getElementById("right2"); 
				 let btnGal = document.getElementById("btn-galery"); 
			
		
			
					  if (

					  	h.innerHTML === "Inicio"					  	
					  	){

						
					    btn.src ='pics/portugal.webp';
					    tt.innerHTML = "Traduzir:";
					    h.innerHTML = "Home";
					    a.innerHTML = "About me";
					    s.innerHTML = "Skills";
					    c.innerHTML = "Contact";
					    hmb.innerHTML = "Home";
					    amb.innerHTML = "About me";
					    smb.innerHTML = "Skills";
					    cmb.innerHTML = "Contact";
					
					    rd.innerHTML = "© All right reserved.";
					    rm.innerHTML = "© All right reserved."; 
					
					    hm.innerHTML = "Hire me";
					    words = ["Hello world!", "I'm a...","Web developer."];
					    			    	
					  					
									    
					  } else {

						btn.src ='pics/united.webp';
					    tt.innerHTML = "Translate: ";
					    h.innerHTML = "Inicio";
					    a.innerHTML = "Sobre";
					    s.innerHTML = "Habilidades";
					    c.innerHTML = "Contato";
					    hmb.innerHTML = "Inicio";
					    amb.innerHTML = "Sobre";
					    smb.innerHTML = "Habilidades";	
					    cmb.innerHTML = "Contato";					    
					    rd.innerHTML = "© Todos os direitos reservados.";
					    rm.innerHTML = "© Todos os direitos reservados.";
					
					    hm.innerHTML = "Contrate-me";	
					    words = ["Olá mundo!", "Eu sou...", "Desenvolvedor web."];  

					  } 
					}
  
let i = 0;
let timer;

function typingEffect() {

	let word =  words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
		document.getElementById('word').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 400);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 100);
	};
	loopDeleting();
};

typingEffect();