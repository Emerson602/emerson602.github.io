let myFunction = setTimeout(function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}, 10000); 

function autoRefresh() {

  window.location = window.location.href;
} setInterval('autoRefresh()',500000);



function myFunctionX() {

    document.getElementById("myPopup").style.display = "none";       

  }


  