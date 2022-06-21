const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resultsDiv = document.querySelector(".results");
const resultsText = document.createElement("p");

rockButton.addEventListener("click", playRound);
paperButton.addEventListener("click", playRound);
scissorsButton.addEventListener("click", playRound);

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
    resultsText.innerText = "Empate!";
    resultsDiv.appendChild(resultsText);
    return "tie";
  } else if (
    playerSelection.target.id === "rock" &&
    computerSelection() === "paper"
  ) {
    console.log("Computer wins: paper eats rock");
    resultsText.innerText = "Computador venceu: papel come pedra";
    resultsDiv.appendChild(resultsText);
    return "computer";
  } else if (
    playerSelection.target.id === "rock" &&
    computerSelection() === "scissors"
  ) {
    console.log("Player wins: rock breaks scissors");
    resultsText.innerText = "Você venceu: pedra quebra tesoura";
    resultsDiv.appendChild(resultsText);
    return "player";
  } else if (
    playerSelection.target.id === "paper" &&
    computerSelection() === "rock"
  ) {
    console.log("Player wins: paper eats rock");
    resultsText.innerText = "Você venceu: papel come pedra";
    resultsDiv.appendChild(resultsText);
    return "player";
  } else if (
    playerSelection.target.id === "paper" &&
    computerSelection() === "scissors"
  ) {
    console.log("Computer wins: scissors cuts paper");
    resultsText.innerText = "Computador venceu: tesoura corta papel";
    resultsDiv.appendChild(resultsText);
    return "computer";
  } else if (
    playerSelection.target.id === "scissors" &&
    computerSelection() === "rock"
  ) {
    console.log("Computer wins: rock breaks scissors");
    resultsText.innerText = "Computador venceu: pedra quebra tesoura";
    resultsDiv.appendChild(resultsText);
    return "computer";
  } else if (
    playerSelection.target.id === "scissors" &&
    computerSelection() === "paper"
  ) {
    console.log("Player wins: scissors cuts paper");
    resultsText.innerText = "Você venceu: tesoura corta papel";
    resultsDiv.appendChild(resultsText);
    return "player";
  }
}
