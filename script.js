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

// Catch and validate input from the user and return a string
function playerSelection() {
  let play = "";
  play = prompt("Choose your weapon (rock, paper or scissors):").toLowerCase();
  while (play !== "rock" && play !== "paper" && play !== "scissors") {
    play = prompt("Incorrect! Enter your play:").toLowerCase();
  }
  return play;
}

// Compare the players selections and returns the winner
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("Tie");
    return "tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("Computer wins: paper eats rock");
    return "computer";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("Player wins: rock breaks scissors");
    return "player";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("Player wins: paper eats rock");
    return "player";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("Computer wins: scissors cuts paper");
    return "computer";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("Computer wins: rock breaks scissors");
    return "computer";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("Player wins: scissors cuts paper");
    return "player";
  }
}

// Loop 5 playRound(), stores the score and return the winner
function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    console.log(`---Round ${i + 1}---`);
    let result = playRound(playerSelection(), computerSelection());
    if (result === "player") {
      playerScore++;
      console.log(`You scored! You: ${playerScore} x CPU: ${computerScore}`);
    } else if (result === "computer") {
      computerScore++;
      console.log(
        `Computer scored! You: ${playerScore} x CPU: ${computerScore}`
      );
    } else {
      console.log(
        `Tie! Nobody scores. You: ${playerScore} x CPU: ${computerScore}`
      );
    }
  }
  if (playerScore > computerScore) {
    return "You win!";
  } else if (computerScore > playerScore) {
    return "Computer wins!";
  } else {
    return "Tie. Nobody wins";
  }
}

// console.log(game());
console.log(computerSelection());
