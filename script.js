const roundCounterDiv = document.querySelector(".current-round");

const weaponsDiv = document.querySelector(".weapons");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

// const resultsText = document.createElement("p");
const resultsDiv = document.querySelector(".results");
const playerScoreSpan = document.querySelector("#player-score");
const computerScoreSpan = document.querySelector("#computer-score");

// Counters
let playerScore = 0,
  computerScore = 0,
  roundCounter = 1;

// Event listeners
// for touchscreens
rockButton.addEventListener("touchstart", playRound);
paperButton.addEventListener("touchstart", playRound);
scissorsButton.addEventListener("touchstart", playRound);
// for pointers
rockButton.addEventListener("click", playRound);
paperButton.addEventListener("click", playRound);
scissorsButton.addEventListener("click", playRound);

const restartButton = document.querySelector(".restart-button");
restartButton.addEventListener("click", () => {
  playerScoreSpan.innerText = playerScore = 0;
  computerScoreSpan.innerText = computerScore = 0;
  resultsDiv.innerText = "Aguardando jogada...";
  weaponsDiv.classList.toggle("hidden");
  restartButton.classList.toggle("hidden");
  roundCounterDiv.innerText = `Round ${(roundCounter = 0)}`;
});

// Verify if the game must continue
function verifyScore(playerScore, computerScore) {
  if (playerScore === 5) {
    resultsDiv.innerText = "Fim de jogo!\nVocê venceu!!!";
    weaponsDiv.classList.toggle("hidden");
    restartButton.classList.toggle("hidden");
  } else if (computerScore === 5) {
    resultsDiv.innerText = "Fim de jogo.\nComputador venceu.";
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
  playerSelection.preventDefault();
  const computerSelection = computerPlay();
  if (playerSelection.target.id === computerSelection) {
    console.log("Tie");
    roundCounterDiv.innerText = `Round ${++roundCounter}`;
    resultsDiv.innerText = `Empate. Ninguém pontua.`;
    verifyScore(playerScore, computerScore);
    return "tie";
  } else if (
    playerSelection.target.id === "rock" &&
    computerSelection === "paper"
  ) {
    console.log("Computer wins: paper eats rock");
    roundCounterDiv.innerText = `Round ${++roundCounter}`;
    resultsDiv.innerText = `Computador venceu: papel come pedra.`;
    computerScoreSpan.innerText = ++computerScore;
    verifyScore(playerScore, computerScore);
    return "computer";
  } else if (
    playerSelection.target.id === "rock" &&
    computerSelection === "scissors"
  ) {
    console.log("Player wins: rock breaks scissors");
    roundCounterDiv.innerText = `Round ${++roundCounter}`;
    resultsDiv.innerText = `Você venceu: pedra quebra tesoura.`;
    playerScoreSpan.innerText = ++playerScore;
    verifyScore(playerScore, computerScore);
    return "player";
  } else if (
    playerSelection.target.id === "paper" &&
    computerSelection === "rock"
  ) {
    console.log("Player wins: paper eats rock");
    roundCounterDiv.innerText = `Round ${++roundCounter}`;
    resultsDiv.innerText = `Você venceu: papel come pedra.`;
    playerScoreSpan.innerText = ++playerScore;
    verifyScore(playerScore, computerScore);
    return "player";
  } else if (
    playerSelection.target.id === "paper" &&
    computerSelection === "scissors"
  ) {
    console.log("Computer wins: scissors cuts paper");
    roundCounterDiv.innerText = `Round ${++roundCounter}`;
    resultsDiv.innerText = `Computador venceu: tesoura corta papel.`;
    computerScoreSpan.innerText = ++computerScore;
    verifyScore(playerScore, computerScore);
    return "computer";
  } else if (
    playerSelection.target.id === "scissors" &&
    computerSelection === "rock"
  ) {
    console.log("Computer wins: rock breaks scissors");
    roundCounterDiv.innerText = `Round ${++roundCounter}`;
    resultsDiv.innerText = `Computador venceu: pedra quebra tesoura.`;
    computerScoreSpan.innerText = ++computerScore;
    verifyScore(playerScore, computerScore);
    return "computer";
  } else if (
    playerSelection.target.id === "scissors" &&
    computerSelection === "paper"
  ) {
    console.log("Player wins: scissors cuts paper");
    roundCounterDiv.innerText = `Round ${++roundCounter}`;
    resultsDiv.innerText = `Você venceu: tesoura corta papel.`;
    playerScoreSpan.innerText = ++playerScore;
    verifyScore(playerScore, computerScore);
    return "player";
  }
}
