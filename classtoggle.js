const element = document.getElementById("button-mobile-nav"); 



function buttonMobile() { 

  let menuMobile = document.getElementById("mobile-nav");
   menuMobile.classList.toggle("mobile-nav"); 


   if(menuMobile.classList.toggle('active')){         

    element.setAttribute("class", "fa-solid fa-xmark"); 

  }
   else{  

    element.setAttribute("class", "fas fa-bars");
      
   }      
   }







