const select = document.querySelector('#select');
const input = document.querySelector('#input');
const button = document.querySelector('#button'); 
let countryCode = ''
let whatsappNumber = ''
let link = ''


function setCountryCode() {	
   countryCode = parseFloat(select.value);  
     link = `https://api.whatsapp.com/send?phone=${countryCode}${whatsappNumber}`; 		
   	 button.setAttribute('href', link);
     console.log(`codigo ${countryCode}`)	  

}

function setWhatsappNumber() {
   whatsappNumber = parseFloat(input.value);  
   
   if(typeof whatsappNumber === 'number' && !isNaN(whatsappNumber)) {
   	link = `https://api.whatsapp.com/send?phone=${countryCode}${whatsappNumber}`
   	button.setAttribute('href', link);
   	console.log(`Numero ${whatsappNumber}`)
   }   
   		
}

function checkEntry() {	

	if (countryCode == '' || whatsappNumber == '' || isNaN(whatsappNumber)) {
        alert('Check if the fields were filled in correctly!');
    } else {
    	window.open(link, '_blank');
    }     	
}

function handleEnterKeyPress(event) {
    if (event.key === 'Enter') {
        checkEntry();
    }
}

select.addEventListener('input', setCountryCode);
input.addEventListener('input', setWhatsappNumber);
button.addEventListener('click', checkEntry);
document.addEventListener('keypress', handleEnterKeyPress);






