function computerSelection() {
  let play = "";
  switch (Math.floor(Math.random() * 3 + 1)) {
    case 1:
      play = "Rock";
      break;
    case 2:
      play = "Paper";
      break;
    case 3:
      play = "Scissors";
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
