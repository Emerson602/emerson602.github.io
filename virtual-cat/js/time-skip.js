// Função para obter o horário atual formatado
function getFormattedTime() {
    let dataAtual = new Date();
    let hora = dataAtual.getHours();
    let minutos = dataAtual.getMinutes();
    let segundos = dataAtual.getSeconds();

    if (hora < 10) hora = '0' + hora;
    if (minutos < 10) minutos = '0' + minutos;
    if (segundos < 10) segundos = '0' + segundos;

    return hora + ':' + minutos + ':' + segundos;
}

// Função para calcular a diferença de tempo
function calcularDiferencaTempo(horarioAnterior, horarioAtual) {
    let anterior = new Date('2000-01-01 ' + horarioAnterior);
    let atual = new Date('2000-01-01 ' + horarioAtual);

    let diferencaMilissegundos = atual - anterior;
    let diferencaMinutos = diferencaMilissegundos / (1000 * 60);

    let horas = Math.floor(diferencaMinutos / 60);
    let minutos = Math.round(diferencaMinutos % 60);

    return { horas: horas, minutos: minutos };
}

// Verifica se já existe um horário no localStorage
let horarioAnterior = localStorage.getItem('horarioFechamento');

// Obtém o horário atual formatado
let horarioAtual = getFormattedTime();

// Calcula a diferença de tempo e verifica a condição
if (horarioAnterior) {
    let diferenca = calcularDiferencaTempo(horarioAnterior, horarioAtual);

    if (diferenca.horas === 1) {   
      	
      	health -= randomNumber * 5;
		happy -= randomNumber * 5;
		alimentation -= randomNumber * 5;
		hydration -= randomNumber * 5;
		vitality -= randomNumber * 5;
		cleaning -= randomNumber * 5;
		bathroom -= randomNumber * 5; 

    } else if (diferenca.horas === 2) {   
      	
      	health -= randomNumber * 10;
		happy -= randomNumber * 10;
		alimentation -= randomNumber * 10;
		hydration -= randomNumber * 10;
		vitality -= randomNumber * 10;
		cleaning -= randomNumber * 10;
		bathroom -= randomNumber * 10; 

    } else if (diferenca.horas === 3) {   
      	
      	health -= randomNumber * 15;
		happy -= randomNumber * 15;
		alimentation -= randomNumber * 15;
		hydration -= randomNumber * 15;
		vitality -= randomNumber * 15;
		cleaning -= randomNumber * 15;
		bathroom -= randomNumber * 15; 
    }


}
