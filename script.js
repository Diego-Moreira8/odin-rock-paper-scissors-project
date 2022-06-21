const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resultsDiv = document.querySelector(".results");
const resultsText = document.createElement("p");
const weaponsDiv = document.querySelector(".weapons");
const restartButton = document.querySelector(".restart-button");

let playerScore = 0,
  computerScore = 0;

rockButton.addEventListener("click", playRound);
paperButton.addEventListener("click", playRound);
scissorsButton.addEventListener("click", playRound);

restartButton.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  weaponsDiv.classList.toggle("hidden");
  restartButton.classList.toggle("hidden");
});

function verifyScore(playerScore, computerScore) {
  if (playerScore === 5) {
    resultsText.innerText = "Fim de jogo!\nVocê venceu!!!";
    resultsDiv.appendChild(resultsText);
    weaponsDiv.classList.toggle("hidden");
    restartButton.classList.toggle("hidden");
  } else if (computerScore === 5) {
    resultsText.innerText = "Fim de jogo.\nComputador venceu.";
    resultsDiv.appendChild(resultsText);
    weaponsDiv.classList.toggle("hidden");
    restartButton.classList.toggle("hidden");
  }
}

// Creates a random play for the computer and return in a string
function computerSelection() {
  let play = "";
  switch (Math.floor(Math.random() * 3 + 1)) {
    case 1:
      play = "rock";
      break;
    case 2:
      play = "paper";
      break;
    case 3:
      play = "scissors";
      break;
  }
  return play;
}

// Compare the players selections and returns the winner
function playRound(playerSelection) {
  if (playerSelection.target.id === computerSelection()) {
    console.log("Tie");
    resultsText.innerText = `Empate. Ninguém pontua.\nPlacar:\nVocê ${playerScore} x ${computerScore} Computador`;
    resultsDiv.appendChild(resultsText);
    verifyScore(playerScore, computerScore);
    return "tie";
  } else if (
    playerSelection.target.id === "rock" &&
    computerSelection() === "paper"
  ) {
    console.log("Computer wins: paper eats rock");
    resultsText.innerText = `Computador venceu: papel come pedra.\nPlacar:\nVocê ${playerScore} x ${++computerScore} Computador`;
    resultsDiv.appendChild(resultsText);
    verifyScore(playerScore, computerScore);
    return "computer";
  } else if (
    playerSelection.target.id === "rock" &&
    computerSelection() === "scissors"
  ) {
    console.log("Player wins: rock breaks scissors");
    resultsText.innerText = `Você venceu: pedra quebra tesoura.\nPlacar:\nVocê ${++playerScore} x ${computerScore} Computador`;
    resultsDiv.appendChild(resultsText);
    verifyScore(playerScore, computerScore);
    return "player";
  } else if (
    playerSelection.target.id === "paper" &&
    computerSelection() === "rock"
  ) {
    console.log("Player wins: paper eats rock");
    resultsText.innerText = `Você venceu: papel come pedra.\nPlacar:\nVocê ${++playerScore} x ${computerScore} Computador`;
    resultsDiv.appendChild(resultsText);
    verifyScore(playerScore, computerScore);
    return "player";
  } else if (
    playerSelection.target.id === "paper" &&
    computerSelection() === "scissors"
  ) {
    console.log("Computer wins: scissors cuts paper");
    resultsText.innerText = `Computador venceu: tesoura corta papel.\nPlacar:\nVocê ${playerScore} x ${++computerScore} Computador`;
    resultsDiv.appendChild(resultsText);
    verifyScore(playerScore, computerScore);
    return "computer";
  } else if (
    playerSelection.target.id === "scissors" &&
    computerSelection() === "rock"
  ) {
    console.log("Computer wins: rock breaks scissors");
    resultsText.innerText = `Computador venceu: pedra quebra tesoura.\nPlacar:\nVocê ${playerScore} x ${++computerScore} Computador`;
    resultsDiv.appendChild(resultsText);
    verifyScore(playerScore, computerScore);
    return "computer";
  } else if (
    playerSelection.target.id === "scissors" &&
    computerSelection() === "paper"
  ) {
    console.log("Player wins: scissors cuts paper");
    resultsText.innerText = `Você venceu: tesoura corta papel.\nPlacar:\nVocê ${++playerScore} x ${computerScore} Computador`;
    resultsDiv.appendChild(resultsText);
    verifyScore(playerScore, computerScore);
    return "player";
  }
}
