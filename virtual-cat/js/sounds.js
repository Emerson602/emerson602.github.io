const buttons = document.querySelectorAll('button');
const btnActivateAudio = document.querySelector("#btn-activate-audio");
const btnTurnUpVol = document.querySelector("#btn-up-vol");
const btnTurnDownVol = document.querySelector("#btn-down-vol");
const iconBtnTurnDownVol = document.querySelector("#icon-btn-activate-audio");

const myAudio = document.querySelector("#audio");
const myAudioClick = document.querySelector("#audio-click");

let clickSoundEffectTimeout = null;



function activateAudio() {

  if (myAudio.paused) {
    myAudio.currentTime = 0;
    myAudio.play();    
    iconBtnTurnDownVol.setAttribute('src', './imgs/volume-high-solid.svg')
  } else {
    myAudio.pause();    
    iconBtnTurnDownVol.setAttribute('src', './imgs/volume-xmark-solid.svg')
  }
} 

function turnUpVol() {

  if (myAudio.volume < 1) {
    myAudio.volume = Math.min(myAudio.volume + 0.1, 1);
    myAudioClick.volume = Math.min(myAudio.volume + 0.1, 1);     
  }
}

function turnDownVol() {

  if (myAudio.volume > 0) {
    myAudio.volume = Math.max(myAudio.volume - 0.1, 0); 
    myAudioClick.volume = Math.max(myAudio.volume - 0.1, 0);
  }
} 

function debounceClickSoundEffect() {
  if (clickSoundEffectTimeout) {
    clearTimeout(clickSoundEffectTimeout);
  }

  clickSoundEffectTimeout = setTimeout(function() {
    if (myAudioClick.paused) {
      myAudioClick.currentTime = 0;
      myAudioClick.play();    
    } 
  }, 100); 
}

btnActivateAudio.addEventListener('click', activateAudio);
buttons.forEach(button => {
  button.addEventListener('click', debounceClickSoundEffect);
});
btnTurnUpVol.addEventListener('click', turnUpVol);
btnTurnDownVol.addEventListener('click', turnDownVol);