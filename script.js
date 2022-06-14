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

function playerSelection() {
  let play = "";
  do {
    play = prompt("Enter your play:").toLowerCase();
  } while (play !== "rock" && play !== "paper" && play !== "scissors");
  return play;
}

function round(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "Computer wins: paper eats rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "Player wins: rock breaks scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "Player wins: paper eats rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "Computer wins: scissors cuts paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "Computer wins: rock breaks scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "Player wins: scissors cuts paper";
  }
}

console.log(round(computerSelection(), computerSelection()));
