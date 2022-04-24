var btn = document.querySelector("#btn");
  var btn2 = document.querySelector("#btn2");
  
  
  btn.addEventListener("click", function() {
    var div = document.querySelector("#container2");
    
  if(div.style.display === "none") {
        div.style.display = "flex";
        document.querySelector("#container").style.display = "none";
        document.querySelector("#container3").style.display = "none";
        //porthoguese
        document.getElementById('btn').src ='imgs/brasil.webp';
        //english
        document.getElementById('btn2').src = 'imgs/united.webp';         

    } else {
      div.style.display = "none";
      document.querySelector("#container").style.display = "flex";
      //italian
      document.getElementById('btn').src ='imgs/italy.webp';  
      // english
      document.getElementById('btn2').src = 'imgs/united.webp';     

  }
    
});

var div2 = document.getElementById("container2").style.display = "none";
 

/*===========================================================*/


btn2.addEventListener("click", function() {
    var div = document.querySelector("#container3");
    
  if(div.style.display === "none") {
        div.style.display = "flex";
        document.querySelector("#container2").style.display = "none";
        document.querySelector("#container").style.display = "none";
        //italian
        document.getElementById('btn').src = 'imgs/italy.webp';
        //portoghese
        document.getElementById('btn2').src = 'imgs/brasil.webp';

    } else {
      div.style.display = "none";
      document.querySelector("#container").style.display = "flex";
      //italian
      document.getElementById('btn').src = 'imgs/italy.webp';
      //english
      document.getElementById('btn2').src = 'imgs/united.webp';


  }
    
});


var div3 = document.querySelector("#container3").style.display = "none"; 