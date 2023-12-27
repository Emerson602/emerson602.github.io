const app = {
    data() {
        return {
            showForm: false,
            showHistoric: false,
                 
        }
    },
    methods: {
        toggleForm() {
            this.showForm = !this.showForm;
          },
        toggleHistoric() {
            this.showHistoric = !this.showHistoric;
          },          
    },
    mounted() {
       
    }
}

Vue.createApp(app).mount('#app');