new Vue({
  el: '#app',
  data: {
    pokemons: [],
    limit: 15,
    offset: 0,
  },
  methods: {
    getTypeColor(type) {
      const colors = {
        normal: '#F5F5F5',
        fire: '#FDDFDF',
        grass: '#DEFDE0',
        electric: '#FCF7DE',
        ice: '#DEF3FD',
        water: '#DEF3FD',
        ground: '#F4E7DA',
        rock: '#D5D5D4',
        fairy: '#FCEAFF',
        poison: '#98D7A5',
        bug: '#F8D5A3',
        ghost: '#CAC0F7',
        dragon: '#97B3E6',
        psychic: '#EAEDA1',
        fighting: '#E6E0D4'
      };
      return colors[type] || colors.normal;
    },
    async fetchPokemonData() {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=${this.offset}`);

        if (!response.data.results) {
          throw new Error('Não foi possível obter as informações');
        }

        const pokemons = await Promise.all(
          response.data.results.map(async (result) => {
            const response = await axios.get(result.url);
            const types = response.data.types.map((info) => info.type.name);
            const imgUrl = `./assets/img/${response.data.id}.png`;
            return {
              id: response.data.id,
              name: result.name,
              type: types,
              imgUrl: imgUrl,
            };
          })
        );

        this.pokemons = [...this.pokemons, ...pokemons];
        this.offset += this.limit;
      } catch (error) {
        console.log('Algo deu errado:', error);
      }
    },
    formattedPokemonName(pokemon) {
      return `${pokemon.id}. ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}`;
    },
    pokemonTypeText(pokemon) {
      return pokemon.type.length > 1 ? pokemon.type.join(' | ') : pokemon.type[0];
    },
    observeLastPokemon(entries) {
      const [lastEntry] = entries;
      if (lastEntry.isIntersecting) {
        this.fetchPokemonData();
      }
    },
    setupIntersectionObserver() {
      const options = {
        rootMargin: '500px',
      };
      this.intersectionObserver = new IntersectionObserver(this.observeLastPokemon, options);
      this.intersectionObserver.observe(this.$el.querySelector('[data-js="pokemons-list"] > li:last-child'));
    },
  },
  created() {
    this.fetchPokemonData();
  },
  mounted() {
    this.setupIntersectionObserver();
  },
  beforeDestroy() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  },
});
