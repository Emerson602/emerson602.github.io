const app = {
    data() {
        return {
            showForm: false,
                 
        }
    },
    methods: {
        toggleForm() {
            this.showForm = !this.showForm;
          }        
    },
    mounted() {
       
    }
}

Vue.createApp(app).mount('#app');