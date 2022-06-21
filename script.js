const roundCounterDiv = document.querySelector(".current-round");

const weaponsDiv = document.querySelector(".weapons");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const resultsText = document.createElement("p");
const resultsDiv = document.querySelector(".results");
const playerScoreSpan = document.querySelector("#player-score");
const computerScoreSpan = document.querySelector("#computer-score");

// Counters
let playerScore = 0,
  computerScore = 0,
  roundCounter = 1;

// Event listeners
rockButton.addEventListener("click", playRound);
paperButton.addEventListener("click", playRound);
scissorsButton.addEventListener("click", playRound);

const restartButton = document.querySelector(".restart-button");
restartButton.addEventListener("click", () => {
  playerScoreSpan.innerText = playerScore = 0;
  computerScoreSpan.innerText = computerScore = 0;
  resultsDiv.innerText = "";
  weaponsDiv.classList.toggle("hidden");
  restartButton.classList.toggle("hidden");
  roundCounterDiv.innerText = `Round ${(roundCounter = 0)}`;
});

// Verify if the game must continue
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
function computerPlay() {
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
  const computerSelection = computerPlay();
  if (playerSelection.target.id === computerSelection) {
    console.log("Tie");
    roundCounterDiv.innerText = `Round ${++roundCounter}`;
    resultsText.innerText = `Empate. Ninguém pontua.`;
    resultsDiv.appendChild(resultsText);
    verifyScore(playerScore, computerScore);
    return "tie";
  } else if (
    playerSelection.target.id === "rock" &&
    computerSelection === "paper"
  ) {
    console.log("Computer wins: paper eats rock");
    roundCounterDiv.innerText = `Round ${++roundCounter}`;
    resultsText.innerText = `Computador venceu: papel come pedra.`;
    resultsDiv.appendChild(resultsText);
    computerScoreSpan.innerText = ++computerScore;
    verifyScore(playerScore, computerScore);
    return "computer";
  } else if (
    playerSelection.target.id === "rock" &&
    computerSelection === "scissors"
  ) {
    console.log("Player wins: rock breaks scissors");
    roundCounterDiv.innerText = `Round ${++roundCounter}`;
    resultsText.innerText = `Você venceu: pedra quebra tesoura.`;
    resultsDiv.appendChild(resultsText);
    playerScoreSpan.innerText = ++playerScore;
    verifyScore(playerScore, computerScore);
    return "player";
  } else if (
    playerSelection.target.id === "paper" &&
    computerSelection === "rock"
  ) {
    console.log("Player wins: paper eats rock");
    roundCounterDiv.innerText = `Round ${++roundCounter}`;
    resultsText.innerText = `Você venceu: papel come pedra.`;
    resultsDiv.appendChild(resultsText);
    playerScoreSpan.innerText = ++playerScore;
    verifyScore(playerScore, computerScore);
    return "player";
  } else if (
    playerSelection.target.id === "paper" &&
    computerSelection === "scissors"
  ) {
    console.log("Computer wins: scissors cuts paper");
    roundCounterDiv.innerText = `Round ${++roundCounter}`;
    resultsText.innerText = `Computador venceu: tesoura corta papel.`;
    resultsDiv.appendChild(resultsText);
    computerScoreSpan.innerText = ++computerScore;
    verifyScore(playerScore, computerScore);
    return "computer";
  } else if (
    playerSelection.target.id === "scissors" &&
    computerSelection === "rock"
  ) {
    console.log("Computer wins: rock breaks scissors");
    roundCounterDiv.innerText = `Round ${++roundCounter}`;
    resultsText.innerText = `Computador venceu: pedra quebra tesoura.`;
    resultsDiv.appendChild(resultsText);
    computerScoreSpan.innerText = ++computerScore;
    verifyScore(playerScore, computerScore);
    return "computer";
  } else if (
    playerSelection.target.id === "scissors" &&
    computerSelection === "paper"
  ) {
    console.log("Player wins: scissors cuts paper");
    roundCounterDiv.innerText = `Round ${++roundCounter}`;
    resultsText.innerText = `Você venceu: tesoura corta papel.`;
    resultsDiv.appendChild(resultsText);
    playerScoreSpan.innerText = ++playerScore;
    verifyScore(playerScore, computerScore);
    return "player";
  }
}
