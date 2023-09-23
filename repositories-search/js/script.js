const content = document.querySelector('#content');
const input = document.querySelector('#input');
const btn = document.querySelector('#btn');

let username = null;


function getRepository(repositories) {     
     
     axios

     .get(`https://api.github.com/users/${username}/repos`)

     .then((response) => {
        
        const repositories = response.data;      

        if (repositories.length === 0) {

            alert("User not found!");

        } else {

            repositories.forEach(({ name }) => {
                const link = document.createElement('a');
                link.setAttribute('href', `https://github.com/${username}/${name}`);
                link.setAttribute('target', '_blank');
                link.innerHTML = `${name}`;
                content.appendChild(link);
            }); 
        }

        return repositories ;

        
     })

     .catch((error) => {

        console.log(error); 
       
      }); 
}

function submit(event) { 
  if (event.key === "Enter" || event.type === "click") {
    username = input.value;
    console.log(username); 

    if (username === "") {
            alert("Enter the username github!");
        } else {
            content.innerHTML = '';  
            getRepository(); 
        }  

  }
}

btn.addEventListener("click", submit);
input.addEventListener("keydown", submit);
