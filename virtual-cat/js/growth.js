function ageUpdate() { 
 
  months += 1;

  if (months > 11) {    
    months = 0;
    age += 1;
  } else if (age === lifetime) {    
    clearInterval(ageUpdateInterval);
  };
  
};  

function growth() {

  let currentWidth = parseFloat(imgCat.style.width) || 100;

  let incrementedValue = 0;

  if (window.matchMedia("(max-width: 600px)").matches && months <= 6) {

      currentWidth = parseFloat(imgCat.style.width) || 30;
      incrementedValue = 0.12;
      imgCat.style.width = (currentWidth + incrementedValue) + 'vw';

  } else if (months <= 6) {

    currentWidth = parseFloat(imgCat.style.width) || 100;
    incrementedValue = 1;
    imgCat.style.width = (currentWidth + incrementedValue) + 'px'; 
    
  } else {

    clearInterval(growthInterval);

  }; 

}; 

const ageUpdateInterval = setInterval(ageUpdate, oneDay); 
const growthInterval = setInterval(growth, 192000);