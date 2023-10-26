const app = Vue.createApp({
    data() {
      return {
        headerMessage: "Calcule o seu consumo de gás!",
        timeMessage: "Digite o tempo em minutos:", 
        consumptionMessage: "Digite o consumo do queimador (ver no manual do fabricante do fogão):",
        capacityMessage: "Digite a capacidade do botijão (13 ou 45 kg):",
        priceMessage: "Digite o preço do botijão de gás:", 
        buttonMessage: "Calcular",
        timeValue: '',
        consumptionValue: '',
        capacityValue: '',
        priceValue: '',
      }
    },
    methods: {

        calculate(event) {             
            
            const time = document.querySelector('#time')
            const consumption = document.querySelector('#consumption')  
            const capacity = document.querySelector('#capacity')  
            const price = document.querySelector('#price')
            const spent = document.querySelector('#spent') 
            
            this.timeValue = parseFloat(time.value)
            this.consumptionValue = parseFloat(consumption.value)
            this.capacityValue = parseFloat(capacity.value)
            this.priceValue = parseFloat(price.value)   

            let timeResult = this.timeValue / 60            
            let comsumptionResult = timeResult * this.consumptionValue
            let capacityResult = comsumptionResult / this.capacityValue
            let priceResult = capacityResult * this.priceValue 
            
            let spentResult = priceResult

            spent.innerText = `Em ${this.timeValue} minutos você gasta aproximadamente R$ ${spentResult.toFixed(2)}`
            
            event.preventDefault()
        }        
      }    
  })

 app.mount('#app')  


