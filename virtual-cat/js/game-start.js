const gameStartDiv = document.querySelector('.game-start');
const input = document.querySelector('#cat-name-input');
const btnStart = document.querySelector('#btn-start');

const storedName = localStorage.getItem('name');
const storedAge = localStorage.getItem('age');
const storedMonths = localStorage.getItem('months');


function newGame() {

  if(storedName == null){

    const setName = btnStart.addEventListener('click', () => {

      name = input.value;
      age = 0;
      months = 0;
      localStorage.setItem("name", name);
      gameStartDiv.remove();
      clearInterval(checkInterval)

    });     

    const checkInterval = setInterval(check, 1000);

    function check(){
        
        if (input.value.trim() === "") {
            
            btnStart.disabled = true;
            btnStart.setAttribute('id', 'not-clickable');

        } else {
            
            btnStart.disabled = false;
            btnStart.setAttribute('id', 'btn-start'); 

        }
        
    };   

  } else { 
       
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

newGame(); 






 
      









  
