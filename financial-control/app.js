const app = {
    data() {
        return {
            transactionInput: '',
            showForm: false,
            showHistoric: false,
            descriptionInput: '', 
            typeInput: '',
            valueInput: '',
            transactionList: [],
            dateTime: '', 
            financialIncome: localStorage.getItem("financialIncome") || 0,
            financialExpenses: localStorage.getItem("financialExpenses") || 0, 
            amount: parseInt(),
            currentDateTime: new Date(), 
            numberTransaction: parseInt(localStorage.getItem("number-transaction") || 0),                         
        }
    },
    methods: {

        getCurrentDateTime() {
            setInterval(() => {                  
                  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};                  
                  const formattedDateTime = this.currentDateTime.toLocaleDateString('pt-BR', options);                                         
                  localStorage.setItem("DateTime", formattedDateTime);
                  this.dataTime = localStorage.getItem("DateTime")                                 
            }, 10000) 
         }, 
        setCurrentYear() {            
            const footer = document.querySelector('#footer');   
            
            footer.innerText = `Financial control © - ${this.currentDateTime.getFullYear()}`
        },
        toggleForm() {
            this.showForm = !this.showForm;          
          },
        closeForm() {
            this.toggleForm()
            this.reload()
        },  
        toggleHistoric() {
            this.showHistoric = !this.showHistoric;                
        },
        closeHistoric() {
            this.toggleHistoric()
            this.reload()
        },
        
        getTransactionHistory() {
        /*  this.transactionList = [];
            let count = 0;
            for (let i = 0; i < this.numberTransaction; i++) {
                count += 1;

                const transactionDate = localStorage.getItem(`transaction-date-${this.numberTransaction}`, this.dataTime);
                const transactionDescription = localStorage.getItem(`transaction-description-${this.numberTransaction}`, this.descriptionInput);
                const transactionType = localStorage.getItem(`transaction-type-${this.numberTransaction}`, this.typeInput);
                const transactionValue = localStorage.getItem(`transaction-value-${this.numberTransaction}`, this.valueInput);
                const numberTransaction = localStorage.getItem("number-transaction", this.numberTransaction);
                
                this.transactionList.push(`<span id="date-time" class="bg-light">${createIn}</span><span class="bg-light  mt-3">${transactionDescription}</span>`); 
                `<li class="d-flex flex-row justify-content-between align-items-center bg-light p-3 border border-success border-5 border-start-0 border-start-top border-bottom-0 border-top-0 rounded mt-2">
                    <span>Salario</span>                    
                    <span>R$ 4000</span>
                 </li>`
            }    */
        
        },  
        newTransaction() {         

            if(this.descriptionInput !== '' && this.typeInput === 'Receita' && this.valueInput !== '' && !isNaN(this.valueInput)) {               
                this.financialIncome += parseInt(this.valueInput)   
                this.storeData()
                this.toggleForm() 
                this.reload() 
                this.currentBalance()                  
                return        
            }

            if(this.descriptionInput !== '' && this.typeInput === 'Despesa' && this.valueInput !== '' && !isNaN(this.valueInput)) {                
                this.financialExpenses += parseInt(this.valueInput)
                this.storeData()
                this.toggleForm()
                this.reload()  
                this.currentBalance()                    
                return
            }

            alert('Preencha todos os campos corretamente!')
 
        },         
        storeData() {
                this.numberTransaction += 1;
                    
                localStorage.setItem(`transaction-date-${this.numberTransaction}`, this.dataTime); 
                localStorage.setItem(`transaction-description-${this.numberTransaction}`, this.descriptionInput);
                localStorage.setItem(`transaction-type-${this.numberTransaction}`, this.typeInput);
                localStorage.setItem(`transaction-value-${this.numberTransaction}`, this.valueInput);
                localStorage.setItem("number-transaction", this.numberTransaction);  

                this.getTransactionHistory()
        },
        currentBalance() {                         
            localStorage.setItem("financialIncome", this.financialIncome);
            localStorage.setItem("financialExpenses", this.financialExpenses);

            this.financialIncome = parseInt(localStorage.getItem("financialIncome"));
            this.financialExpenses = parseInt(localStorage.getItem("financialExpenses"));  
        
            this.amount = this.financialIncome - this.financialExpenses;          

        },
        showCurrentBalance() {
            const currentBalance = document.querySelector('#current-balance');
            const financialIncome = document.querySelector('#financial-income');
            const financialExpenses = document.querySelector('#financial-expenses');

            let amountString = this.amount;
            let financialExpensesString = this.financialExpenses;
            let financialIncomeString = this.financialIncome    
            
            const formatNumber = (value) => {
                const options = {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                };
                return value.toLocaleString('pt-BR', options);
              };
            
              currentBalance.textContent = formatNumber(amountString);
              financialIncome.textContent = formatNumber(financialIncomeString);
              financialExpenses.textContent = formatNumber(financialExpensesString);
        },
        reload() {
            setTimeout(() => {
                location.reload()
            }, 500); 
        },              
    },
    mounted() {
       this.getCurrentDateTime()
       this.setCurrentYear()
       this.getTransactionHistory()
       this.currentBalance()
       this.showCurrentBalance()       
    }
}

Vue.createApp(app).mount('#app');