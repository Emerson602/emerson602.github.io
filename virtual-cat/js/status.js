const healthUpdateInterval = setInterval(healthStatus, 1200000);
const happyUpdateInterval = setInterval(happyStatus, 1100000);
const alimentationUpdateInterval = setInterval(alimentationStatus, 1000000);
const hydrationUpdateInterval = setInterval(hydrationStatus, 900000);
const vitalityUpdateInterval = setInterval(vitalityStatus, 800000);
const cleaningUpdateInterval = setInterval(cleaningStatus, 700000);
const bathroomUpdateInterval = setInterval(bathroomStatus, 600000);

function healthStatus() {    

  if (happy <= 60 || alimentation <= 60 || hydration <= 60 || vitality <= 60 || cleaning <= 60 || bathroom <= 60) {
    health -= randomNumber;
  } else if (happy <= 30 || alimentation <= 30 || hydration <= 30 || vitality <= 30 || cleaning <= 30 || bathroom <= 30) {
    health -= randomNumber * 2;
  } else if (happy === 0 || alimentation === 0 || hydration === 0 || vitality === 0 || cleaning === 0 || bathroom === 0) {
    health -= randomNumber * 3;
  } else if (happy <= 60 && alimentation <= 60 && hydration <= 60 && vitality <= 60 && cleaning <= 60 && bathroom <= 60) {
    health -= randomNumber * 4;
  } else if (happy <= 30 && alimentation <= 30 && hydration <= 30 && vitality <= 30 && cleaning <= 30 && bathroom <= 30) {
    health -= randomNumber * 5;
  } else if (happy === 0 && alimentation === 0 && hydration === 0 && vitality === 0 && cleaning === 0 && bathroom === 0) {
    health -= randomNumber * 6;
  };  

};

function happyStatus() {  

  if (age <= 2) {
    happy -= randomNumber * 3;
  } else if (age <= 10) {
    happy -= randomNumber * 2;
  } else {
    happy -= randomNumber;    
  }

};


function alimentationStatus() {  
  
  if (age <= 2) {
    alimentation -= randomNumber * 3;
  } else if (age <= 10) {
    alimentation -= randomNumber * 2;
  } else {
    alimentation -= randomNumber;   
  }  

};

function hydrationStatus() { 

  if (age <= 2) {
    hydration -= randomNumber * 3;
  } else if (age <= 10) {
    hydration -= randomNumber * 2;
  } else {
    hydration -= randomNumber;    
  }

};

function vitalityStatus() { 

  if (age <= 2) {
    vitality -= randomNumber;
  } else if (age <= 10) {
    vitality -= randomNumber * 2;
  } else {
    vitality -= randomNumber * 3;   
  } 

};

function cleaningStatus() { 

  if (age <= 2) {
    cleaning -= randomNumber * 3;                
  } else if (age <= 10) {
    cleaning -= randomNumber * 2;    
  } else {
    cleaning -= randomNumber; 
  }

}; 

function bathroomStatus() {  

  if (age <= 2) {
    bathroom -= randomNumber * 3;
  } else if (age <= 10) {
    bathroom -= randomNumber * 2;
  } else {
    bathroom -= randomNumber;   
  }  

};

function limiteStatus() {
  
  if (health <= 0) {
    health  = 0;
    clearInterval(healthUpdateInterval);
  } else if (health > 100) {
    health = 100;
  } else {
    healthUpdateInterval
  } 

  if (happy <= 0) {
    happy  = 0;
    clearInterval(happyUpdateInterval);
  } else if (happy > 100) {
     happy = 100;
  } else {
    happyUpdateInterval
  } 

  if (alimentation <= 0) {
    alimentation  = 0;
    clearInterval(alimentationUpdateInterval);
  } else if (alimentation > 100) {
    alimentation = 100;
  } else {
    alimentationUpdateInterval
  }

  if (hydration <= 0) {
    hydration  = 0;
    clearInterval(hydrationUpdateInterval);
  } else if (hydration > 100) {
    hydration = 100; 
  } else {
    hydrationUpdateInterval
  }

  if (vitality <= 0) {
    vitality = 0;
    clearInterval(vitalityUpdateInterval);
  } else if (vitality > 100) {
    vitality = 100; 
  } else {
    vitalityUpdateInterval
  }

  if (cleaning <= 0) {
    cleaning = 0;    
    clearInterval(cleaningUpdateInterval);
  } else if (cleaning > 100) {
    cleaning = 100;
  }else {
    cleaningUpdateInterval
  }

  if (bathroom <= 0) {
    bathroom = 0;
    clearInterval(bathroomUpdateInterval);
  } else if (bathroom > 100) {
    bathroom = 100;
  }else {
    bathroomUpdateInterval
  }

  healthBar.style.width = health + '%';
  happyBar.style.width = happy + '%';
  alimentationBar.style.width = alimentation + '%';
  hydrationBar.style.width = hydration + '%';
  vitalityBar.style.width = vitality + '%';
  cleaningBar.style.width = cleaning + '%';
  bathroomBar.style.width = bathroom + '%';

}; 

limiteStatus()


function updateBar(barElement, value) {

  if (value >= 90) {
    barElement.style.backgroundColor = '#006400';
  } else if (value >= 80) {
    barElement.style.backgroundColor = '#008000';
  } else if (value >= 70) {
    barElement.style.backgroundColor = '#228B22';
  } else if (value >= 60) {
    barElement.style.backgroundColor = '#FFD700';
  } else if (value >= 50) {
    barElement.style.backgroundColor = '#FFA500';
  } else if (value >= 40) {
    barElement.style.backgroundColor = '#FF8C00';
  } else if (value >= 30) {
    barElement.style.backgroundColor = '#FF4500';
  } else if (value >= 20) {
    barElement.style.backgroundColor = '#FF0000';
  } else if (value >= 10) {
    barElement.style.backgroundColor = '#8B0000';
  } else if (value >= 5) {
    barElement.style.backgroundColor = '#141414';
  } else if (value >= 0) {
    barElement.style.backgroundColor = '#000000';
  };

}; 





const limiteUpdateStatusInterval = setInterval(limiteStatus, 1000);
