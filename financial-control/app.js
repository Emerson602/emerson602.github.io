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
                  localStorage.setItem("dateTime", formattedDateTime);
                  this.dateTime = localStorage.getItem("dateTime")                                 
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
           this.transactionList = [];
            let count = 0;
            for (let i = 0; i < this.numberTransaction; i++) {
                count += 1;
                
                const transactionDate = localStorage.getItem(`transaction-date-${count}`, this.dateTime);
                const transactionDescription = localStorage.getItem(`transaction-description-${count}`, this.descriptionInput);
                const transactionType = localStorage.getItem(`transaction-type-${count}`, this.typeInput);
                const transactionValue = localStorage.getItem(`transaction-value-${count}`, this.valueInput);
                                
                this.transactionList.push(`      
                    <span id="data" class="text-center">${transactionDate}</span>                         
                    <span class="mt-2 text-start text-sm-center d-block">Descrição: <br>${transactionDescription}</span>
                    <span class="mt-2 text-start text-sm-center d-block">Tipo: ${transactionType}</span>                
                    <span class="text-start text-sm-center d-block">Valor: ${transactionValue}</span>                                           
                `); 

            }    
        
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
                    
                localStorage.setItem(`transaction-date-${this.numberTransaction}`, this.dateTime); 
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
            }, 200); 
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