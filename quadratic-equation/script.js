const button = document.querySelector("#myBtn");

let inputA = document.querySelector('#quadraticTermA');
let inputB = document.querySelector('#quadraticTermB');
let inputC = document.querySelector('#quadraticTermC');
let formula = document.querySelector('#formula');
let result = document.querySelector('#response');

function myEquation() { 

    let coefficientA = parseInt(inputA.value);
    let coefficientB = parseInt(inputB.value);
    let coefficientC = parseInt(inputC.value);

    let a = coefficientA;
    let b = coefficientB;
    let c = coefficientC;   
    
    let delta = (coefficientB ** 2) - 4 * coefficientA* coefficientC;
    let deltaRoot = Math.sqrt(delta);
    let negativeCoefficientB = (-coefficientB); 

    let firstRoot =  (negativeCoefficientB + deltaRoot) / (coefficientA * (2));
    let secondRoot = (negativeCoefficientB - deltaRoot) / (coefficientA * (2));          

    let expression = (-4) * a * c;
    let exponentiation = b**2;
    let operator = (expression > 0) ? "+" : "";

    if (delta < 0) {

        result.innerHTML = `Δ = ${b}² - 4. ${a} .${c} <br>
        Δ = ${exponentiation} ${operator} ${expression} <br> 
        Δ = ${exponentiation + expression} <br>
        √ ${exponentiation + expression} = ${deltaRoot.toFixed(1)} <br>
        A equação não possui raízes reais,<br> apenas raízes complexas.`;

    } else if (delta === 0) { 
        
        result.innerHTML = `Δ = ${b}² - 4. ${a} .${c} <br> 
        Δ = ${exponentiation} ${operator} ${expression} <br> 
        Δ = ${exponentiation + expression} <br> 
        √ ${exponentiation + expression} = ${deltaRoot.toFixed(1)} <br><br>          
        x' = ${negativeCoefficientB} + ${deltaRoot.toFixed(1)} / ${a * (2)} = ${firstRoot.toFixed(1)} <br>           
        x" = ${negativeCoefficientB} - ${deltaRoot.toFixed(1)} / ${a * (2)} = ${secondRoot.toFixed(1)} <br>
        A equação possui duas raízes<br> reais iguais: <br>
        {${firstRoot.toFixed(1)}} e {${secondRoot.toFixed(1)}}`;

    } else if (delta > 0){         

        result.innerHTML = `
        Δ = ${b}² - 4. ${a} .${c} <br> Δ = ${exponentiation} ${operator} ${expression} <br> 
        Δ = ${exponentiation + expression} <br> √ ${exponentiation + expression} = ${deltaRoot.toFixed(1)} <br><br>         
        x = ${negativeCoefficientB} ± ${deltaRoot.toFixed(1)} / ${a * (2)}<br>           
        x' = ${negativeCoefficientB} + ${deltaRoot.toFixed(1)} / ${a * (2)} = ${firstRoot.toFixed(1)} <br>           
        x" = ${negativeCoefficientB} - ${deltaRoot.toFixed(1)} / ${a * (2)} = ${secondRoot.toFixed(1)} <br> 
        A equação possui duas raízes<br> reais e distintas: <br>
        {${firstRoot.toFixed(1)}} e {${secondRoot.toFixed(1)}} <br>`;

    } else {

        alert('Digite todos os coeficientes da equação!')
    }
}

button.addEventListener("click", myEquation);


inputA.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        myEquation();
    }
});

inputB.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        myEquation();
    }
});

inputC.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        myEquation();
    }
});

function reflect() {   
    
   let textA = inputA.value;
   let textB = inputB.value; 
   let textC = inputC.value; 
   let operatorB = (textB > 0) ? "+" : "";    
   let operatorC = (textC > 0) ? "+" : "";

   formula.innerHTML = `${textA}x² ${operatorB} ${textB}x ${operatorC} ${textC} = 0`; 

}; 

