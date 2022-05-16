  var url = 'home.html'  
    





    var form = document.getElementById('formulario');
    var campo = document.getElementById('campo');  

    
          
    form.addEventListener('submit', function(e) {
    


      if (campo.value == 'access'){           

            window.open(url, '_blank');    
            document.getElementById('btn').style.display = "block";  
             
        }
      else {

        alert('Selecione a cidade!');    
      }

    });


