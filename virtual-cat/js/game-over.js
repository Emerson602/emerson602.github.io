const gameOverInterval = setInterval(gameOver, 1000);


function gameOver() { 


  if (age >= lifetime || health <= 100){

    imageUrl = './imgs/dead.webp';
    myAudio.paused

    const gameOverDiv = document.createElement("div");
    const gameOverMessage = document.createElement("span");
    const restartButton = document.createElement("button"); 

    content.appendChild(gameOverDiv);
    gameOverDiv.appendChild(gameOverMessage);
    gameOverDiv.appendChild(restartButton);

    gameOverDiv.classList.add('cat-died');
    gameOverMessage.classList.add('cat-died-message');
    restartButton.classList.add('restart-btn');
    gameOverMessage.innerText = `O ${name} morreu!`
    restartButton.innerText = "Novo jogo!";

    clearInterval(gameOverInterval);
    clearInterval(timeSkipInterval)
    clearInterval(limiteUpdateStatusInterval)
    clearInterval(updateAllBarsInterval)
    clearInterval(disableAndEnabledActionButtonsInterval)
    clearInterval(ageUpdateInterval)  
    clearInterval(growthInterval)
    clearInterval(storeDateInterval)
    clearInterval(timeSkipInterval)  
    
      
    btnActivateAudio.disabled = true;
    btnTurnUpVol.disabled = true;
    btnTurnDownVol.disabled = true; 

    btnActivateAudio.setAttribute('id', 'not-clickable-2');    
    btnTurnUpVol.setAttribute('id', 'not-clickable-2');    
    btnTurnDownVol.setAttribute('id', 'not-clickable-2');   

    health = 0;
    happy = 0; 
    alimentation = 0; 
    hydration = 0;
    vitality = 0;
    cleaning = 0; 
    bathroom = 0;

    const restartBtn = document.querySelector('.restart-btn');

    const restartGame =  restartBtn.addEventListener('click', () => {

    restartBtn.innerText = "Reiniciando..."

    localStorage.clear();

    setTimeout(() => {
      location.reload();
    }, 3000); 

});  
      
  }

}; 

gameOver();









