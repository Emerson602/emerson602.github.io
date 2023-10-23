const btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
const div = document.querySelector("#container");
    
if(div.style.display === "none") {
      div.style.display = "grid";
      document.querySelector("#container2").style.display = "none";
  } else {
    div.style.display = "none";
    document.querySelector("#container2").style.display = "grid";
}
    
});


const div2 = document.querySelector("#container2").style.display = "none"; 

  function myFunctionShare() {
  const x = document.getElementById("btn");
  if (x.innerHTML === "Clique para ver os planos de Internet") {
    x.innerHTML = "Clique para ver os planos de TV";
    btn.style.backgroundColor = '#781E7D';
    
  } else {
    x.innerHTML = "Clique para ver os planos de Internet";
    btn.style.backgroundColor = '#083D93';
  }
}
