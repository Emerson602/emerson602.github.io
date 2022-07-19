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
				 let btnGal = document.getElementById("btn-gallery"); 
				
		
			
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
					    btnGal.innerHTML = "Live Preview"
					    			    	
					  					
									    
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
					    btnGal.innerHTML = "Visualizar" 

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


/*about me*/


function transL2(){

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

				 
				 let rd = document.getElementById("right");
				 let rm = document.getElementById("right2");
				 let tts = document.getElementById("tt-sobre");
				 let tx = document.getElementById("tx-sobre"); 
				 
				
		
			
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
					    tts.innerHTML = "Know Me More"; 
					    tx.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."; 		 						
					   
					    			    	
					  					
									    
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
					    tts.innerHTML = "Quem sou"; 
					    tx.innerHTML = "texto em construção!"; 		 												
					   

					  } 
					}


/*portfolio*/



function transL3(){

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

				 let vz1 = document.getElementById("btn-galery-1");
				 let vz2 = document.getElementById("btn-galery-2");
				 let vz3 = document.getElementById("btn-galery-3");
				 let vz4 = document.getElementById("btn-galery-4");

				 let rd = document.getElementById("right");
				 let rm = document.getElementById("right2");
				
				 
				
		
			
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

					    vz1.innerHTML = "Live preview";	
					    vz2.innerHTML = "Live preview";	
					    vz3.innerHTML = "Live preview";	
					    vz4.innerHTML = "Live preview";	

					    rd.innerHTML = "© All right reserved.";
					    rm.innerHTML = "© All right reserved.";
					  	

					    
					    
					   
					    			    	
					  					
									    
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

					    vz1.innerHTML = "Visualizar";
					    vz2.innerHTML = "Visualizar";
					    vz3.innerHTML = "Visualizar";
					    vz4.innerHTML = "Visualizar";

					    rd.innerHTML = "© Todos os direitos reservados.";
					    rm.innerHTML = "© Todos os direitos reservados.";
					       
					 
					  } 
					} 



/*skills*/	





function transL4(){

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

				 let sp = document.getElementById("my-skills");	

				 let rd = document.getElementById("right");
				 let rm = document.getElementById("right2");
				
				 
				
		
			
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

					    sp.innerHTML = "My skills";	
					   

					    rd.innerHTML = "© All right reserved.";
					    rm.innerHTML = "© All right reserved.";
					  	

					    
					    
					   
					    			    	
					  					
									    
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

					    sp.innerHTML = "Minhas habilidades";	

					    rd.innerHTML = "© Todos os direitos reservados.";
					    rm.innerHTML = "© Todos os direitos reservados.";
					       
					 
					  } 
					} 




