// score tags
let userScore = 0;
let computerScore = 0;
const userDisplayScore = document.getElementById("user-score");
const computerDisplayScore = document.getElementById("computer-score");

// score message
const scoreText = document.querySelector(".game-result");

// values
const options = ["piedra", "papel", "tijeras"];

// controls (buttons) - container tags
const optionsContainer = document.querySelector(".game-controls");

optionsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("game-option")) {
        const userValue = e.target.dataset.id;
        const computerValue = getRandomValue();

        const result = getWinnerText(userValue, computerValue);

        scoreText.innerHTML = result;
    }
});

// random value 4 computer
function getRandomValue() {
    const value = Math.floor(Math.random() * options.length);

    return options[value];
}

// select a winner
function getWinnerText(user, computer) {
    let message = "";
    if (
        (user == "piedra" && computer == "tijeras") ||
        (user == "papel" && computer == "piedra") ||
        (user == "tijeras" && computer == "papel")
    ) {
        userScore++;
        userDisplayScore.innerText = userScore;
        message = `
        <h2 class="game-result__text">Ganaste.</h2>
        <h2 class="game-result__text">${user} Vs ${computer}</h2>
        `;
    } else if (
        (computer == "piedra" && user == "tijeras") ||
        (computer == "papel" && user == "piedra") ||
        (computer == "tijeras" && user == "papel")
    ) {
        computerScore++;
        computerDisplayScore.innerText = computerScore;
        message = `
        <h2 class="game-result__text">Perdiste.</h2>
        <h2 class="game-result__text">${user} Vs ${computer}</h2>
        `;
    } else if (user == computer) {
        message = `
        <h2 class="game-result__text">Empate.</h2>
        <h2 class="game-result__text">${user} Vs ${computer}</h2>
        `;
    }
    return message;
}
