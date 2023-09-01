
function updateAllBars() {

  updateBar(healthBar, health);
  updateBar(happyBar, happy);
  updateBar(alimentationBar, alimentation);
  updateBar(hydrationBar, hydration);
  updateBar(vitalityBar, vitality);
  updateBar(cleaningBar, cleaning);
  updateBar(bathroomBar, bathroom);

};

const run = document.createElement("button");
const play = document.createElement("button");
const sleep = document.createElement("button"); 
const toilet = document.createElement("button");
const kindness = document.createElement("button");
const littleSnack = document.createElement("button"); 
const eat = document.createElement("button");
const drink = document.createElement("button");
const relax = document.createElement("button");
const bath = document.createElement("button");
const brushTeeth = document.createElement("button");
const futebol = document.createElement("button");

function createActionsButtons() {
   
   run.innerText = "Correr";  
   run.setAttribute("id", "btn-run");
  
   play.innerText = "Brincar";
   play.setAttribute("id", "btn-play");
   
   sleep.innerText = "Dormir";
   sleep.setAttribute("id", "btn-sleep");
    
   toilet.innerText = "Banheiro";
   toilet.setAttribute("id", "btn-toilet");
 
   kindness.innerText = "Carinho";
   kindness.setAttribute("id", "btn-kindness");

   littleSnack.innerText = "Lanchinho";
   littleSnack.setAttribute("id", "btn-little-snack");

   eat.innerText = "Comer";
   eat.setAttribute("id", "btn-eat");
 
   drink.innerText = "Beber agua";
   drink.setAttribute("id", "btn-drink");
  
   relax.innerText = "Relaxar";
   relax.setAttribute("id", "btn-relax");

   bath.innerText = "Banho";
   bath.setAttribute("id", "btn-bath"); 

   brushTeeth.innerText = "Escovar os dentes";
   brushTeeth.setAttribute("id", "btn-brush-teeth");

   futebol.innerText = "Futebol";
   futebol.setAttribute("id", "btn-futebol");

   containerActions.appendChild(run); 
   containerActions.appendChild(play);
   containerActions.appendChild(sleep); 
   containerActions.appendChild(toilet);
   containerActions.appendChild(kindness);
   containerActions.appendChild(littleSnack);
   containerActions.appendChild(eat);
   containerActions.appendChild(drink);
   containerActions.appendChild(relax); 
   containerActions.appendChild(bath);
   containerActions.appendChild(brushTeeth);
   containerActions.appendChild(futebol);

} 

createActionsButtons();

const btnRun = document.querySelector('#btn-run');
const btnPlay = document.querySelector('#btn-play');
const btnSleep = document.querySelector('#btn-sleep');
const btnToilet = document.querySelector('#btn-toilet');
const btnKindness = document.querySelector('#btn-kindness');
const btnLittleSnack = document.querySelector('#btn-little-snack');
const btnEat = document.querySelector('#btn-eat');
const btnDrink = document.querySelector('#btn-drink');
const btnRelax = document.querySelector('#btn-relax');
const btnBath = document.querySelector('#btn-bath');
const btnBrushTeeth = document.querySelector('#btn-brush-teeth');
const btnFutebol = document.querySelector('#btn-futebol');

let randomNumberActions = Math.floor(Math.random() * (10 - 5 + 1)) + 5; 

function disableAndEnabledActionButtons() {

    if (health <= 0) {

      run.setAttribute('id', 'not-clickable');      
      play.setAttribute('id', 'not-clickable');
      sleep.setAttribute('id', 'not-clickable');
      toilet.setAttribute('id', 'not-clickable');
      kindness.setAttribute('id', 'not-clickable');
      littleSnack.setAttribute('id', 'not-clickable');
      eat.setAttribute('id', 'not-clickable');
      drink.setAttribute('id', 'not-clickable');
      relax.setAttribute('id', 'not-clickable');
      bath.setAttribute('id', 'not-clickable');
      brushTeeth.setAttribute('id', 'not-clickable');
      futebol.setAttribute('id', 'not-clickable');

      randomNumberActions = 0;
      btnActions.setAttribute('id', 'not-clickable');
      btnStatus.setAttribute('id', 'not-clickable');     
      btnActions.disabled = true;
      btnStatus.disabled = true; 

      return 

   }; 

    if (vitality <= 30 || alimentation <= 30 || bathroom <= 30|| hydration <= 30) {

      run.setAttribute('id', 'not-clickable');
      run.disabled = true; 

    } else {

      run.setAttribute('id', 'btn-run');
      run.disabled = false;    

    };

    if (vitality <= 30 || alimentation <= 30 || bathroom <= 30|| hydration <= 30) {

      play.setAttribute('id', 'not-clickable'); 
      play.disabled = true;   
      
    } else {

      play.setAttribute('id', 'btn-play'); 
      play.disabled = false;    
      
    };

    if (vitality >= 100 || alimentation <= 30 || bathroom <= 30 || hydration <= 30) {

      sleep.setAttribute('id', 'not-clickable');  
      sleep.disabled = true;     
      
    } else {

      sleep.setAttribute('id', 'btn-sleep');  
      sleep.disabled = false;   
      
    }; 

    if (bathroom >= 100) {

      toilet.setAttribute('id', 'not-clickable');
      toilet.disabled = true;      
      
    } else {

      toilet.setAttribute('id', 'btn-toilet');
      toilet.disabled = false;       
      
    };

    if (happy >= 100) {

      kindness.setAttribute('id', 'not-clickable');  
      kindness.disabled = true;
      
    } else {

      kindness.setAttribute('id', 'btn-kindness');     
      kindness.disabled = false;
      
    };

    if (alimentation >= 100 || bathroom <= 30) {

      littleSnack.setAttribute('id', 'not-clickable');
      littleSnack.disabled = true;    
      
    } else {

      littleSnack.setAttribute('id', 'btn-little-snack');
      littleSnack.disabled = false;     
      
    };

    if (alimentation >= 100 || bathroom <= 30) {

      eat.setAttribute('id', 'not-clickable'); 
      eat.disabled = true;      
      
    } else {

      eat.setAttribute('id', 'btn-eat'); 
      eat.disabled = false;     
      
    };

    if (hydration >= 100 || bathroom <= 30) {

      drink.setAttribute('id', 'not-clickable'); 
      drink.disabled = true;       
      
    } else {

      drink.setAttribute('id', 'btn-drink'); 
      drink.disabled = false;    
      
    };

    if (vitality >= 90 || alimentation <= 30 || bathroom <= 30 || hydration <= 30) {

      relax.setAttribute('id', 'not-clickable');  
      relax.disabled = true;       
      
    } else {

      relax.setAttribute('id', 'btn-relax');  
      relax.disabled = false;   
      
    };

    if (cleaning >= 100 || bathroom <= 30 || hydration <= 30 || alimentation <= 30) {

      bath.setAttribute('id', 'not-clickable');  
      bath.disabled = true;       
      
    } else {

      bath.setAttribute('id', 'btn-bath');  
      bath.disabled = false;   
      
    };

    if (cleaning >= 100 || bathroom <= 30 || hydration <= 30 || alimentation <= 30) {

      brushTeeth.setAttribute('id', 'not-clickable');  
      brushTeeth.disabled = true;       
      
    } else {

      brushTeeth.setAttribute('id', 'btn-brush-teeth');  
      brushTeeth.disabled = false;   
      
    }; 

    if (vitality <= 30 || alimentation <= 30 || bathroom <= 30|| hydration <= 30) {

      futebol.setAttribute('id', 'not-clickable');  
      futebol.disabled = true;       
      
    } else {

      futebol.setAttribute('id', 'btn-futebol');  
      futebol.disabled = false;   
      
    };

}; 

const delayRunButton = setTimeout(() => {run.setAttribute('id', 'btn-run'); run.disabled = false;}, 30000);
const delayPlayButton = setTimeout(() => {play.setAttribute('id', 'btn-play'); play.disabled = false;}, 30000);
const delaySleepButton = setTimeout(() => {sleep.setAttribute('id', 'btn-sleep'); sleep.disabled = false;}, 30000);
const delayToiletButton = setTimeout(() => {toilet.setAttribute('id', 'btn-toilet'); toilet.disabled = false;}, 30000);
const delayKindnessButton = setTimeout(() => {kindness.setAttribute('id', 'btn-kindness'); kindness.disabled = false;}, 30000);
const delayLittleSnackButton = setTimeout(() => {littleSnack.setAttribute('id', 'btn-little-snack'); littleSnack.disabled = false;}, 30000);
const delayEatButton = setTimeout(() => {eat.setAttribute('id', 'btn-eat'); eat.disabled = false;}, 30000);
const delayDrinkButton = setTimeout(() => {drink.setAttribute('id', 'btn-drink'); drink.disabled = false;}, 30000);
const delayRelaxButton = setTimeout(() => {relax.setAttribute('id', 'btn-relax'); relax.disabled = false;}, 30000); 
const delayBathButton = setTimeout(() => {bath.setAttribute('id', 'btn-bath'); bath.disabled = false;}, 30000);
const delayBrushTeethButton = setTimeout(() => {brushTeeth.setAttribute('id', 'btn-brush-teeth'); brushTeeth.disabled = false;}, 30000);
const delayFutebolButton = setTimeout(() => {futebol.setAttribute('id', 'btn-relax'); futebol.disabled = false;}, 30000);

const callFunctions = (indexStatus, updadeImages, updateAllBars) => {
 
  indexStatus(); 
  updadeImages();
  updateAllBars(); 

};


  function deactivateAllButtonsActions() {

    run.setAttribute('id', 'not-clickable');
    run.disabled = true;

    play.setAttribute('id', 'not-clickable');
    play.disabled = true;

    sleep.setAttribute('id', 'not-clickable');
    sleep.disabled = true;

    toilet.setAttribute('id', 'not-clickable');
    toilet.disabled = true;

    kindness.setAttribute('id', 'not-clickable');
    kindness.disabled = true;

    littleSnack.setAttribute('id', 'not-clickable');
    littleSnack.disabled = true;

    eat.setAttribute('id', 'not-clickable');
    eat.disabled = true;

    drink.setAttribute('id', 'not-clickable');
    drink.disabled = true;

    relax.setAttribute('id', 'not-clickable');
    relax.disabled = true;

    bath.setAttribute('id', 'not-clickable');
    bath.disabled = true;

    brushTeeth.setAttribute('id', 'not-clickable');
    brushTeeth.disabled = true;

    futebol.setAttribute('id', 'not-clickable')
    futebol.disabled = true;  

  };

function toRun() { 

  if(alimentation > 30 || hydration > 30 || vitality > 30 || bathroom > 30) { 


    containerStatus.setAttribute('class', 'container-status-hidden');
    containerActions.setAttribute('class', 'container-actions-hidden');

    imageUrl = './animations/running.gif';
    delayAllButtonActions() 

    delayUpdateImages;
    delayRunButton;
    debounceClickSoundEffect(); 

    vitality -= randomNumberActions;
    cleaning -= randomNumberActions;
    hydration -= randomNumberActions;
    alimentation -= randomNumberActions;    
    happy += randomNumberActions;
    health += randomNumberActions - 5; 
    

    if (happy >= 95) {
      
      happy = 100;  
      happy += 0;       

    };

    if (health >= 95) {
      
      health = 100;  
      health += 0;       

    };             

    callFunctions(indexStatus, updadeImages, updateAllBars);

  };  
   
}; 

function toPlay() { 

  if(alimentation > 30 || hydration > 30 || vitality > 30 || bathroom > 30) { 


    containerStatus.setAttribute('class', 'container-status-hidden');
    containerActions.setAttribute('class', 'container-actions-hidden');

    imageUrl = './animations/joking.gif';  
    deactivateAllButtonsActions()

    delayUpdateImages;
    delayPlayButton;
    debounceClickSoundEffect();

    vitality -= randomNumberActions;
    cleaning -= randomNumberActions;
    hydration -= randomNumberActions;
    alimentation -= randomNumberActions;
    happy += randomNumberActions; 
    health += randomNumberActions - 5;     

    if (happy >= 95) {
      
      happy = 100;  
      happy += 0;       

    }; 

    if (health >= 95) {
      
      health = 100;  
      health += 0;       

    }; 

    callFunctions(indexStatus, updadeImages, updateAllBars);

  } ;
   
};  

function toSleep() {   

  if(alimentation > 30 && hydration > 30 && vitality < 100 && bathroom > 30) {     

  containerStatus.setAttribute('class', 'container-status-hidden');
  containerActions.setAttribute('class', 'container-actions-hidden');

  imageUrl = './animations/sleeping.gif';  
  deactivateAllButtonsActions()

  delayUpdateImages;
  delaySleepButton;
  debounceClickSoundEffect();

  vitality += randomNumberActions;
  health += randomNumberActions - 5; 
  
  callFunctions(indexStatus, updadeImages, updateAllBars); 

  return 

};

  if (vitality >= 95) {

      vitality += 0;
      vitality = 100;      
};

  if (health >= 95) {

      health += 0;
      health = 100;
     
};  
  
  callFunctions(indexStatus, updadeImages, updateAllBars);   

}; 

function toToilet() { 

  if(bathroom < 100) {  

  containerStatus.setAttribute('class', 'container-status-hidden');
  containerActions.setAttribute('class', 'container-actions-hidden');

  imageUrl = './animations/bathroom.gif';  
  deactivateAllButtonsActions()

  delayUpdateImages;
  delayToiletButton;
  debounceClickSoundEffect();

  bathroom += randomNumberActions;
  health += randomNumberActions - 5;  

}; 

  if (bathroom >= 95) {     
      
    bathroom += 0;
    bathroom = 100;  

  };

  if (health >= 95) {
    
    health = 100;  
    health += 0;       

  }; 

  callFunctions(indexStatus, updadeImages, updateAllBars);

};  

function toKindness() { 

  if(happy < 100) { 

  containerStatus.setAttribute('class', 'container-status-hidden');
  containerActions.setAttribute('class', 'container-actions-hidden');

  imageUrl = './animations/kindness.gif';  
  deactivateAllButtonsActions()

  delayUpdateImages;
  delayKindnessButton;
  debounceClickSoundEffect();

  happy += randomNumberActions;
  health += randomNumberActions - 5;   

  };

  if (happy >= 95) {

     happy += 0; 
     happy = 100;  
      
  };  

  callFunctions(indexStatus, updadeImages, updateAllBars);

};

function toLittleSnack() { 

  if(alimentation < 100 && vitality > 30 && bathroom > 30) { 


    containerStatus.setAttribute('class', 'container-status-hidden');
    containerActions.setAttribute('class', 'container-actions-hidden');

    imageUrl = './animations/little-snack.gif';  
    deactivateAllButtonsActions()

    delayUpdateImages;
    delayLittleSnackButton;  
    debounceClickSoundEffect();  
    
    happy += randomNumberActions;
    alimentation += randomNumberActions;
    bathroom -= randomNumberActions; 
    hydration -= randomNumberActions;      

    }; 

    if(happy >= 95) {

      happy += 0;
      happy = 100;      
      
    }; 

    if(alimentation >= 95) {

      alimentation += 0;
      alimentation = 100;  
      
    };

    callFunctions(indexStatus, updadeImages, updateAllBars);       
        
  };  

function toEat() { 

  if(alimentation < 100 && vitality > 30 && bathroom > 30 && hydration) { 


    containerStatus.setAttribute('class', 'container-status-hidden');
    containerActions.setAttribute('class', 'container-actions-hidden');

    imageUrl = './animations/eating.gif';  
    deactivateAllButtonsActions()

    delayUpdateImages;
    delayEatButton; 
    debounceClickSoundEffect();   
    
    bathroom -= randomNumberActions; 
    hydration -= randomNumberActions;   
    alimentation += randomNumberActions; 
    happy += randomNumberActions;
    health += randomNumberActions - 5;  

    }; 

    if(alimentation >= 95) {

      alimentation += 0;
      alimentation = 100;  
    
    };

    if(happy >= 95) {

      happy += 0;
      happy = 100;      
     
    };  

    if(health >= 95) {

      health += 0;
      health = 100;      
     
    };  

    callFunctions(indexStatus, updadeImages, updateAllBars); 

};

function toDrink() { 

  if(alimentation < 100 && vitality > 30 && bathroom > 30 && hydration) { 


    containerStatus.setAttribute('class', 'container-status-hidden');
    containerActions.setAttribute('class', 'container-actions-hidden');

    imageUrl = './animations/drinking.gif';  
    deactivateAllButtonsActions()

    delayUpdateImages;
    delayDrinkButton;  
    debounceClickSoundEffect();  
    
    bathroom -= randomNumberActions; 
    hydration += randomNumberActions;  
    health += randomNumberActions - 5;  

    };

    if(hydration >= 95) {

      hydration += 0;
      hydration = 100;      
     
    };  

    if(health >= 95) {

      health += 0;
      health = 100;      
     
    };

    callFunctions(indexStatus, updadeImages, updateAllBars); 

};


function toRelax() {  

    if(alimentation < 100 && vitality > 30 && bathroom > 30 && hydration) { 


    containerStatus.setAttribute('class', 'container-status-hidden');
    containerActions.setAttribute('class', 'container-actions-hidden');

    imageUrl = './animations/relax.gif';  
    deactivateAllButtonsActions()

    delayUpdateImages;
    delayRelaxButton; 
    debounceClickSoundEffect();   
    
    alimentation -= randomNumberActions;
    bathroom -= randomNumberActions; 
    vitality += randomNumberActions;  
    health += randomNumberActions - 5;  

    };

    if(vitality >= 95) {

      vitality += 0;
      vitality = 100;      
     
    };  

    if(health >= 95) {

      health += 0;
      health = 100;      
     
    };

    callFunctions(indexStatus, updadeImages, updateAllBars);

};

function toBath() { 

  if(cleaning < 100 || hydration > 30 || alimentation > 30 || bathroom > 30) { 


    containerStatus.setAttribute('class', 'container-status-hidden');
    containerActions.setAttribute('class', 'container-actions-hidden');

    imageUrl = './animations/bathing.gif';  
    deactivateAllButtonsActions()

    delayUpdateImages;
    delayBathButton;
    debounceClickSoundEffect();

    cleaning += randomNumberActions;  
    happy += randomNumberActions; 
    health += randomNumberActions - 5;     

    if (cleaning >= 95) {
      
      cleaning = 100;  
      cleaning += 0;       

    };

    if (happy >= 95) {
      
      happy = 100;  
      happy += 0;       

    };  

    if (health >= 95) {
      
      healt = 100;  
      healt += 0;       

    };

    callFunctions(indexStatus, updadeImages, updateAllBars);

  } ;
   
};


function toBrushTeeth() { 

  if(cleaning < 100 || hydration > 30 || alimentation > 30 || bathroom > 30) { 


    containerStatus.setAttribute('class', 'container-status-hidden');
    containerActions.setAttribute('class', 'container-actions-hidden');

    imageUrl = './animations/brush-teeth.gif';  
    deactivateAllButtonsActions()

    delayUpdateImages;
    delayBrushTeethButton;
    debounceClickSoundEffect();

    cleaning += randomNumberActions;  
    happy += randomNumberActions; 
    health += randomNumberActions - 5;     

    if (cleaning >= 95) {   
      
      cleaning = 100;  
      cleaning += 0;       

    };

    if (happy >= 95) {
      
      happy = 100;  
      happy += 0;       

    };  

    if (health >= 95) {
      
      healt = 100;  
      healt += 0;       

    };

    callFunctions(indexStatus, updadeImages, updateAllBars);

  } ;
   
};  

function toFutebol() { 

  if(alimentation > 30 || hydration > 30 || vitality > 30 || bathroom > 30) { 


    containerStatus.setAttribute('class', 'container-status-hidden');
    containerActions.setAttribute('class', 'container-actions-hidden');

    imageUrl = './animations/fut.gif';  
    deactivateAllButtonsActions()

    delayUpdateImages;
    delayFutebolButton;
    debounceClickSoundEffect();

    vitality -= randomNumberActions;
    cleaning -= randomNumberActions;
    hydration -= randomNumberActions;
    alimentation -= randomNumberActions;
    happy += randomNumberActions; 
    health += randomNumberActions - 5;      

    if (happy >= 95) {
      
      happy = 100;  
      happy += 0;       

    };

    if (health >= 95) {
      
      healt = 100;  
      healt += 0;       

    };  

    callFunctions(indexStatus, updadeImages, updateAllBars);

  } ;
   
}; 

const delayUpdateImages = setTimeout(() => {

    updadeImages();    

    setTimeout(() => {      

      updadeImages();        

    }, 15000);     

}, 3000);     


btnRun.addEventListener('click', toRun);
btnPlay.addEventListener('click', toPlay);
btnSleep.addEventListener('click', toSleep);
btnToilet.addEventListener('click', toToilet);
btnKindness.addEventListener('click', toKindness);
btnLittleSnack.addEventListener('click', toLittleSnack);
btnEat.addEventListener('click', toEat);
btnDrink.addEventListener('click', toDrink);
btnRelax.addEventListener('click', toRelax); 
btnBath.addEventListener('click', toBath);
btnBrushTeeth.addEventListener('click', toBrushTeeth);
btnFutebol.addEventListener('click', toFutebol);

const updateAllBarsInterval = setInterval(updateAllBars, 1000);
const disableAndEnabledActionButtonsInterval = setInterval(disableAndEnabledActionButtons, 10000);