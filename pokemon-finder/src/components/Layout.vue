<template>
  <div id="content">
    <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png">
    <div id="search-container">
      <h2>You can search pokemon by id</h2>
      <div>
        <input id="input" placeholder="Search pokemons">
        <button @click="search">Search</button>
      </div>
    </div> 

    <ul id="pokemons-container">
      <li v-for="pokemon in pokemons.results" :key="pokemon.name" :id="id">        
        <img :src="renderPokemons(pokemon)" :alt="pokemon.name">   
        <h2>{{ id }}. {{ pokemon.name.toUpperCase() }} </h2>  
        
                                       
      </li>       
    </ul> 

    <div id="controls"> 
      <button @click="firstPage">First</button>      
      <button @click="backPage">Back</button>
      <button @click="nextPage">Next</button>    
      <button @click="lastPage">Last</button>
    </div> 

  </div>
  
</template>

<script>
import axios from 'axios';

export default {
  name: 'Layout',
  data() {
    return {      
      pokemons: [],
      pokemonsPerPage: 25,      
      offset: 0, 
      id: null 
                 
    };
  },
  methods: {
    getPokemons() {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=${this.pokemonsPerPage}&offset=${this.offset}`)
        .then((response) => {
          this.pokemons = response.data;         
        })
        .catch((error) => {
          throw new Error('Não foi possível obter as informações');
        });
    },

    renderPokemons(pokemon) {      
      const urlSpritesParts = pokemon.url.split('/');   
      const idPokemons = urlSpritesParts[urlSpritesParts.length - 2];  
      this.id = idPokemons   
      const urlSprites = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${idPokemons}.png`;
      return urlSprites
    },

    search() { 
        const input = document.querySelector('#input');
        this.pokemonsPerPage = 1;             
        this.id = input.value;          
      if(this.id > 0 && this.id <= 150) {     
        this.offset = this.id - 1;
        this.getPokemons()   
        return     
      }      
      
      alert('Enter an id between 1 and 150');
      this.offset = 0;
      this.pokemonsPerPage = 25;  
      this.getPokemons()
    },  

    firstPage() { 
      if(this.pokemonsPerPage != 1){
        this.offset = 0;  
        this.getPokemons();
      }  
    },  
    
    backPage() {      
      if(this.offset > 0 && this.pokemonsPerPage != 1) {     
        this.offset -= 25
        this.getPokemons()           
      }
    },

    nextPage() {      
      if(this.offset < 125 && this.pokemonsPerPage != 1) {      
        this.offset += 25
        this.getPokemons()
      }
      
    },    

    lastPage() {        
      if(this.pokemonsPerPage != 1) {
         this.offset = 125;
         this.getPokemons();
      }            
    },  
  },
  mounted() {
    this.getPokemons();    
  },
}; 

</script>

<style scoped>
  #content {
    width: 100%;
    height: auto;    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;   
    background-color: #141414;        
  }

  #logo {
    width: 300px;
    height: auto; 
    margin: 100px 0;     
  }

  #search-container {
    width: 100%;
    height: 200px;
    background-color: #202020;
    border-bottom: solid 2px #fff;
    border-top: solid 2px #fff;
    display: flex;
    justify-content: center;
    align-items: center;  
    flex-direction: column;   
  } 

  #search-container h2 {
    color: #fff;
    margin: 20px 0;
    width: 90vw;
    text-align: center;
  }
  
  #search-container input {
    text-align: center;
    height: 35px;
    width: 300px;
    border-radius: 4px 0 0 4px;
    border-right: none;
    outline: none;
    margin: 0;
  }

  #search-container button {
    text-align: center;
    height: 35px;
    padding: 0 15px;
    border-radius: 0 4px 4px 0;
    border-left: none;
    outline: none;
    background-color: #FF8C00;
    color: #fff;
    font-size: 0.9rem;
    margin: 0;
  }

  #search-container button:hover {
    cursor: pointer;
    transition: 2s;
    background-color: #87CEFA;
    color: #141414;
  }

  #pokemons-container {
    display: grid;
    grid-template-columns: auto auto auto auto;
    margin: 100px 0 0 0;
  }

  @media(max-width: 1400px) {
    #pokemons-container {
      grid-template-columns: auto auto auto;
    }
  }

  @media(max-width: 1000px) {
    #pokemons-container {
      grid-template-columns: auto auto;
    }
  }

  @media(max-width: 700px) {
    #pokemons-container {
      grid-template-columns: auto;
    }
  }

  #pokemons-container li {
    display: block;
    text-align: center;
    border: solid 3px #fff;
    background-color: #202020;
    color: #fff;
    border-radius: 12px;
    padding: 40px 30px;
    margin: 8px;    
  }

  #pokemons-container img {
    width: 120px;
    height: auto;   
  }

  h2 {
    font-size: 1rem;
  }

  #controls {   
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center; 
    margin: 50px 0 100px 0;   
  }

  #controls button {
    background-color: #FF8C00;
    color: #fff;
    font-size: 0.9rem;
    height: 35px;
    width: 80px;
    border-radius: 4px;
    margin: 2px;     
  }

  #controls button:hover {
    cursor: pointer;
    transition: 2s;
    background-color: #87CEFA;
    color: #141414;
  }

  
  @media(max-width: 480px) {
    #logo {
      width: 50vw;
      margin: 50px 0;      
    }

    #search-container input {
      width: 60vw;
    }

    #search-container button {
      font-size: 0.8rem;
      padding: 0 12px;
    }

    #pokemons-container li {
      width: 90vw;
    }

    #pokemons-container img {
      width: 50vw;
    }

    #controls button {   
    font-size: 0.8rem;
    height: 25px;
    width: 50px;  
    margin: 2px;     
  }  
  }
  
</style>
