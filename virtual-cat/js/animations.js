function updadeImages() { 
  
  imgCat.src = imageUrl;
  
  if (health == 0 || happy == 0 || alimentation == 0 || hydration == 0 || vitality == 0 || cleaning == 0 || bathroom == 0) {
    imageUrl = './imgs/dead.webp';
  } else if (health <= 5 || happy <= 5 || alimentation <= 5 || hydration <= 5 || vitality <= 5 || cleaning <= 5 || bathroom <= 5) {
    imageUrl = './animations/crying.gif';
  } else if (health <= 15 || happy <= 15 || alimentation <= 15 || hydration <= 15 || vitality <= 15 || cleaning <= 15 || bathroom <= 15) {
    imageUrl = './animations/kicking.gif';
  } else if (health <= 30 || happy <= 30 || alimentation <= 30 || hydration <= 30 || vitality <= 30 || cleaning <= 30 || bathroom <= 30) {
    imageUrl = './animations/thoughtful.gif';
  } else if (health <= 70 || happy <= 70 || alimentation <= 70 || hydration <= 70 || vitality <= 70 || cleaning <= 70 || bathroom <= 70) {
    imageUrl = './animations/angry.gif';
  } else {
    imageUrl = './animations/quiet.gif';
  }

}; 

const updadeImagesInterval = setInterval(updadeImages, imageInterval); 