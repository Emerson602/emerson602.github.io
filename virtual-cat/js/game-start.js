const gameStartDiv = document.querySelector('.game-start');
const input = document.querySelector('#cat-name-input');
const btnStart = document.querySelector('#btn-start');

function newGame() {

  if(localStorage.getItem('name') == ''){

    const setName = btnStart.addEventListener('click', () => {

      name = input.value;
      age = 0;
      months = 0;
      localStorage.setItem("name", name);
      gameStartDiv.remove();

    });    

  }

}

newGame();

function continueGame() {   

  const storedName = localStorage.getItem('name');
  const storedAge = localStorage.getItem('age');
  const storedMonths = localStorage.getItem('months');

  if (localStorage.getItem('name') !== '') { 
    
    input.remove();
    btnStart.innerText = "Entrar";

    name = storedName;
    age = storedAge;
    months = storedMonths;

    const toEnter = btnStart.addEventListener('click', () => {        

      gameStartDiv.remove();

    });    

  }

}

continueGame();








  
