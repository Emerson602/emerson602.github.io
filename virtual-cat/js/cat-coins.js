function catCoinsUpdate() { 
  
  if(health >= 70 && happy >= 70 && alimentation >= 70 &&
   hydration >= 70 && vitality >= 70 && cleaning >= 70 &&
    bathroom >= 70) {

    catCoins += randomNumber;	

  } else {

  	catCoins -= randomNumber;
  }	

  if(catCoins <= 0) {

  	catCoins = 0;
  }  
  
  localStorage.setItem("catCoins", catCoins);
}

const catCoinsUpdateInterval = setInterval(catCoinsUpdate, 120000);


function returnPrize() {
  
  setTimeout(() => { 

  	catCoins += randomNumber;

  }, 20000);	

};





