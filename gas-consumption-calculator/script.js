const app = Vue.createApp({
    data() {
      return {
        headerMessage: "Calcule o seu consumo de gás em Real (R$)",
        timeMessage: "Digite o tempo em minutos:", 
        consumptionMessage: "Digite o consumo do queimador (ver no manual do fabricante do fogão):",
        capacityMessage: "Selecione a capacidade do botijão (13kg ou 45 kg):",
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
            const container = document.querySelector('#container')
            
            this.timeValue = time.value
            this.consumptionValue = consumption.value
            this.capacityValue = capacity.value
            this.priceValue = price.value
            
            if(this.timeValue >= 0 && this.consumptionValue >= 0 && this.capacityValue >= 0 && this.priceValue >= 0) {

              const containerSpent = document.createElement('div')
              const spent = document.createElement('div')
              const closeButton = document.createElement('button')

              container.appendChild(containerSpent)
              containerSpent.appendChild(spent)
              containerSpent.appendChild(closeButton)

              containerSpent.setAttribute('id', 'container-spent')              
              spent.setAttribute('id', 'spent')              
              closeButton.setAttribute('id', 'close-button')
              closeButton.setAttribute('alt', 'Fechar')           
              
              closeButton.innerText = 'Fechar'

              const closeBtn = document.querySelector('#close-button');              

              let timeResult = this.timeValue / 60                                     
              let comsumptionResult = timeResult * this.consumptionValue                        
              let capacityResult = comsumptionResult / this.capacityValue              
              let priceResult = capacityResult * this.priceValue 
              
              let spentResult = priceResult
              
              let totalConsumption = (this.consumptionValue / 60) *  this.timeValue  
              let totalVolume = 13              
              let percentageConsumption = (totalConsumption / totalVolume) * 100;                
              let percentageRemaining = 100 - percentageConsumption              
              let remainingVolume = totalVolume - totalConsumption 
                  
              let timeRemainingMinutes = (remainingVolume * 60) / this.consumptionValue   
                            
              let toFixedIndex = 4 

              if(this.consumptionValue >= 1.3) {
                toFixedIndex = 2               
              }

              spent.innerHTML = `<span>Em ${this.timeValue} minutos de uso gasta aproximadamente <br> aproximadamente R$ ${spentResult.toFixed(2)} Reais .</span><br>
              <span>Total de gás consumido: ${totalConsumption.toFixed(2)} Kg/h .</span><br>
              <span>Utilizou aproximadamente ${percentageConsumption.toFixed(toFixedIndex)}% do volume total do botijão de gás.</span><br>
              <span>Restam aproximadamente ${percentageRemaining.toFixed(toFixedIndex)}% do volume total do botijão de gás.</span><br>
              <span>Restam aproximadamente ${timeRemainingMinutes.toFixed(0)} em minutos para utilizar .</span><br>` 
              
              function close() {                
                window.location.reload()                  
              }

              closeBtn. addEventListener('click', close)
              
            } else {
              alert('Certifique-se de que todos os valores estejam preenchidos corretamente.')
            } 

            event.preventDefault()
        },       
       
      }  
  
  })

 app.mount('#app')  


