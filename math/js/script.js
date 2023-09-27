document.addEventListener("DOMContentLoaded", function () {
    const question = document.getElementById("question");
    const options = ["option1", "option2", "option3", "option4"];
    const answerForm = document.getElementById("answer-form");
    const resultMessage = document.getElementById("result-message");
    const scoreDisplay = document.getElementById("score");

    // Recupere a pontuação armazenada no localStorage, se existir.
    let score = parseInt(localStorage.getItem('score')) || 0;
    let correctAnswer; // Variável para armazenar a resposta correta atual.

    function generateQuestion() {
        const num1 = Math.floor(Math.random() * 10001) - 5000;
        const num2 = Math.floor(Math.random() * 10001) - 5000;

        correctAnswer = num1 * num2; // Armazena a resposta correta atual.

        const answers = [correctAnswer];

        while (answers.length < 4) {
            const randomAnswer = Math.floor(Math.random() * 100000) + 1;
            if (!answers.includes(randomAnswer)) {
                answers.push(randomAnswer);
            }
        }

        shuffleArray(answers);

        question.textContent = `Qual é o resultado de ${num1} x ${num2}?`;

        options.forEach((option, index) => {
            const label = document.getElementById(`label-${option}`);
            const radio = document.getElementById(option);

            label.textContent = answers[index];
            radio.value = answers[index];
        });
    }

    // Atualize a exibição da pontuação com o valor recuperado do localStorage.
    scoreDisplay.textContent = `Pontuação: ${score}`;

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function checkAnswer(event) {
        event.preventDefault();
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (!selectedAnswer) {
            resultMessage.textContent = "Por favor, selecione uma resposta.";
            return;
        }

        const userAnswer = parseInt(selectedAnswer.value, 10);

        if (userAnswer === correctAnswer) {
            score += 5; // Adicione 5 pontos à pontuação em caso de resposta correta.
            resultMessage.textContent = "Resposta correta!";

            // Atualize a exibição da pontuação.
            scoreDisplay.textContent = `Pontuação: ${score}`;

            // Armazene a pontuação no localStorage.
            localStorage.setItem("score", score.toString());
        } else {
            score -= 10; // Deduza 10 pontos em caso de resposta incorreta.
            resultMessage.textContent = "Resposta incorreta. Tente novamente.";

            // Atualize a exibição da pontuação.
            scoreDisplay.textContent = `Pontuação: ${score}`;

            // Armazene a pontuação no localStorage.
            localStorage.setItem("score", score.toString());
        }

        // Limpe a seleção do campo de resposta após o envio.
        selectedAnswer.checked = false;

        // Gere uma nova pergunta.
        generateQuestion();
    }

    generateQuestion();
    answerForm.addEventListener("submit", checkAnswer);
});
