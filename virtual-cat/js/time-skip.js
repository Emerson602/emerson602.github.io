
	function saveTime() {

	  const currentTime = new Date().getTime(); 
	  localStorage.setItem('savedTime', currentTime);
	}

	
	window.addEventListener('beforeunload', saveTime);

	function calculateTimeDifference() {
	  const savedTime = localStorage.getItem('savedTime');
	  
	  if (savedTime) {
	    const currentTime = new Date().getTime();
	    const differenceInMilliseconds = currentTime - parseInt(savedTime);
	    const differenceInMinutes = Math.floor(differenceInMilliseconds / 60000); 
	    
	    return differenceInMinutes;
	  }
	  
	  return 0; 
	}


function timeSkip() {

  const timeDifferenceInMinutes = calculateTimeDifference(); 

  if (timeDifferenceInMinutes >= 720) {
	    
		health -= 100;
		happy -= 100;
		alimentation -= 100;
		hydration -= 100;
		vitality -=  100;
		cleaning -=  100;
		bathroom -=  100;
		ageUpdate() 

  } else if (timeDifferenceInMinutes >= 480) {

  	months += 1;  	
	  health -= randomNumber * 30;
		happy -= randomNumber * 30;
		alimentation -= randomNumber * 30;
		hydration -= randomNumber * 30;
		vitality -= randomNumber * 30;	
		cleaning -= randomNumber * 30;
		bathroom -= randomNumber * 30;		

  } else if (timeDifferenceInMinutes >= 240) {

	  health -= randomNumber * 20;
		happy -= randomNumber * 20;
		alimentation -= randomNumber * 20;
		hydration -= randomNumber * 20;
		vitality -= randomNumber * 20;
		cleaning -= randomNumber * 20;
		bathroom -= randomNumber * 20;
		returnPrize()

  } else if (timeDifferenceInMinutes >= 120) {

	  health -= randomNumber * 15;
		happy -= randomNumber * 15;
		alimentation -= randomNumber * 15;
		hydration -= randomNumber * 15;
		vitality -= randomNumber * 15;
		cleaning -= randomNumber * 15;
		bathroom -= randomNumber * 15;
		returnPrize()

  } else if (timeDifferenceInMinutes >= 60) {

	  health -= randomNumber * 10;
		happy -= randomNumber * 10;
		alimentation -= randomNumber * 10;
		hydration -= randomNumber * 10;
		vitality -= randomNumber * 10;
		cleaning -= randomNumber * 10;
		bathroom -= randomNumber * 10;
		returnPrize()

  } else if (timeDifferenceInMinutes >= 30) {

	  health -= randomNumber * 5;
		happy -= randomNumber * 5;
		alimentation -= randomNumber * 5;
		hydration -= randomNumber * 5;
		vitality -= randomNumber * 5;	
		cleaning -= randomNumber * 5;
		bathroom -= randomNumber * 5;
		returnPrize()

  }

	localStorage.setItem("health", health);
	localStorage.setItem("happy", happy);
	localStorage.setItem("alimentation", alimentation);
	localStorage.setItem("hydration", hydration);
	localStorage.setItem("vitality", vitality);
	localStorage.setItem("cleaning", cleaning);
	localStorage.setItem("bathroom", bathroom);
}

const timeSkipInterval = setTimeout(timeSkip, 5000);


 