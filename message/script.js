const content = document.querySelector('#content');
const title = document.querySelector('#title');
const text = document.querySelector('#text');
let iTitle = 0;
let iContent = 0;
let textContent = 'Que este dia especial seja repleto de alegria, amor e momentos inesquecíveis! Que você seja cercado por amigos, família e todos aqueles que te fazem feliz. Que este novo ano de vida seja repleto de realizações e bênçãos. Feliz aniversário!';
let speed = 50;
const home = document.querySelector('#home')

function typeWriter1() {
  if (iTitle < textTitle.length) {
    title.innerHTML += textTitle.charAt(iTitle);
    iTitle++;
    setTimeout(typeWriter1, speed);
  }
}

function typeWriter2() {
    if (iContent < textContent.length) {      
      text.innerHTML += textContent.charAt(iContent);
      iContent++;
      setTimeout(typeWriter2, speed);
    }
}




window.onload = function() {
    var playButton = document.getElementById("playButton");
    var audio = document.getElementById("audio");
    
    playButton.addEventListener("click", function() {
        audio.play();
        home.style.display = "none";
        typeWriter2();
    });
};
