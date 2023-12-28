const app = {
    data() {
        return {
            transactionInput: '',
            showForm: false,
            showHistoric: false,
            transactionDescription: document.querySelector('#transaction-description'),
            transactionType: document.querySelector('#transaction-type'),
            transactionValue: document.querySelector('#transaction-value'),   
            transactionList: [],
            dateTime: '', 
            financialIncome: '',
            financialExpenses: '', 
        }
    },
    methods: {

        getCurrentDateTime() {
            setInterval(() => {
                  const currentDateTime = new Date();
                  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
                  const formattedDateTime = currentDateTime.toLocaleDateString('pt-BR', options);
                  localStorage.setItem("DateTime", formattedDateTime);
                  this.dataTime = localStorage.getItem("DateTime") 
                  console.log(this.dateTime)                
            }, 1000) 
         }, 
        toggleForm() {
            this.showForm = !this.showForm;
          },
        toggleHistoric() {
            this.showHistoric = !this.showHistoric;
          },
        getTransactions() {
        /*    this.transactionList = [];
            let count = 0;
            for (let i = 0; i < this.numberTransaction; i++) {
                count += 1;
                const transactionDescription = localStorage.getItem(`task-${count}`);
                const createIn = localStorage.getItem(`create-in-${count}`)
                
                this.transactionList.push(`<span id="date-time" class="bg-light">${createIn}</span><span class="bg-light  mt-3">${transactionDescription}</span>`); 
                `<li class="d-flex flex-row justify-content-between align-items-center bg-light p-3 border border-success border-5 border-start-0 border-start-top border-bottom-0 border-top-0 rounded mt-2">
                    <span>Salario</span>                    
                    <span>R$ 4000</span>
                 </li>`
            }    */
        
        },  
        newTransaction() {

            let description = this.transactionDescription.value;
            let type = this.transactionType.value;
            let value = this.transactionValue.value;

            this.toggleForm()             
        },           
    },
    mounted() {
       this.getCurrentDateTime()
    }
}

Vue.createApp(app).mount('#app');