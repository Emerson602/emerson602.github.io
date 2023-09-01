const content = document.querySelector('#content');
const containerStatus = document.querySelector('#container-status');
const containerActions = document.querySelector('#container-actions');
const notificationDiv = document.createElement("div");
const imgCat = document.getElementById('img-cat'); 

let imageUrl = './animations/main.gif'; 

let name = parseInt(localStorage.getItem('name')) || '';
let age = parseInt(localStorage.getItem('age')) || 0;
let months = parseInt(localStorage.getItem('months')) || 0;
const oneDay = 12 * 24 * 60 * 60 * 1000;

const randomNumber = Math.floor(Math.random() * 2);

const healthText = document.querySelector('.healthText');
const happyText = document.querySelector('.happyText');
const alimentationText = document.querySelector('.alimentationText');
const hydrationText = document.querySelector('.hydrationText');
const vitalityText = document.querySelector('.vitalityText');
const cleaningText = document.querySelector('.cleaningText');
const bathroomText = document.querySelector('.bathroomText');

let health = parseInt(localStorage.getItem('health')) || 100; 
let happy = parseInt(localStorage.getItem('happy')) || 100; 
let alimentation = parseInt(localStorage.getItem('alimentation')) || 100; 
let hydration = parseInt(localStorage.getItem('hydration')) || 100; 
let vitality = parseInt(localStorage.getItem('vitality')) || 100;
let cleaning = parseInt(localStorage.getItem('cleaning')) || 100;
let bathroom = parseInt(localStorage.getItem('bathroom')) || 100; 

const min = 15;
const max = 27;
let lifetime = Math.floor(Math.random() * (max - min + 1)) + min;

const nameBar = document.querySelector('.nameBar');
const ageBar = document.querySelector('.ageBar');
const healthBar = document.querySelector('.healthBar');
const happyBar = document.querySelector('.happyBar');
const alimentationBar = document.querySelector('.alimentationBar');
const hydrationBar = document.querySelector('.hydrationBar');
const vitalityBar = document.querySelector('.vitalityBar');
const cleaningBar = document.querySelector('.cleaningBar');
const bathroomBar = document.querySelector('.bathroomBar');

const btnStatus = document.querySelector('.btn-status');
const btnActions = document.querySelector('.btn-actions');


let imageInterval = 60000; 

function containerStatusActive() {

  const containerStatusActive = containerStatus.classList;
  containerStatusActive.toggle("container-status");
  containerActions.setAttribute('class', 'container-actions-hidden'); 

};     

function containerActionsActive() {
 
  const containerActionsActive = containerActions.classList;
  containerActionsActive.toggle("container-actions");
  containerStatus.setAttribute('class', 'container-status-hidden'); 

};

btnStatus.addEventListener('click', containerStatusActive);
btnActions.addEventListener('click', containerActionsActive);

function indexStatus() {    
  
  nameBar.innerHTML = `Nome: ${name}`;
  ageBar.innerHTML = `Idade: ${age}, ${months} m`;  
  healthText.innerHTML = `Saude: ${health}%`;  
  happyText.innerHTML = `Felicidade: ${happy}%`;  
  alimentationText.innerHTML = `Alimentado: ${alimentation}%`;  
  hydrationText.innerHTML = `Hidratação: ${hydration}%`;  
  vitalityText.innerHTML = ` Energia: ${vitality}%`;  
  cleaningText.innerHTML = `Limpeza: ${cleaning}%`;  
  bathroomText.innerHTML = `Aliviado: ${bathroom}%`; 

};

const indexStatusUpdateInterval = setInterval(indexStatus, 2000); 



 