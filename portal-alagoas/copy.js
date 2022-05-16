  function myFunctionCopy() {
       
        var copyText = document.getElementById("myInputcopy"); 

        copyText.select();
        copyText.setSelectionRange(0, 99999); 
         
        navigator.clipboard.writeText(copyText.value); 
    
        alert("CHAVE PIX COPIADA");
      }