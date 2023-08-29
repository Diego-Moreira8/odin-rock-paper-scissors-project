function getPlayerMove() {
  return new Promise((resolve) => {
    const weaponsBtns = document.querySelectorAll(".weapon");

    function handleClick(e) {
      let weapon = e.target.id;

      weaponsBtns.forEach((btn) =>
        btn.removeEventListener("click", handleClick)
      );

      resolve(weapon);
    }

    weaponsBtns.forEach((btn) => btn.addEventListener("click", handleClick));
  });
}

function getComputerMove() {
  const computerMove = Math.floor(Math.random() * 3) + 1;

  switch (computerMove) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function evaluateMoves(playerMove, computerMove) {
  // Result: 0: tie, 1: player wins, 2 computer wins
  let details = [
    "Empate",
    "papel embala pedra",
    "pedra quebra tesoura",
    "tesoura corta papel",
  ];

  if (playerMove === computerMove) {
    return { result: 0, details: details[0] };
  } else if (playerMove === "rock") {
    if (computerMove === "paper") {
      return { result: 2, details: `Computador venceu: ${details[1]}` };
    } else if (computerMove === "scissors") {
      return { result: 1, details: `Você venceu: ${details[2]}` };
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      return { result: 1, details: `Você venceu: ${details[1]}` };
    } else if (computerMove === "scissors") {
      return { result: 2, details: `Computador venceu: ${details[3]}` };
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      return { result: 2, details: `Computador venceu: ${details[2]}` };
    } else if (computerMove === "paper") {
      return { result: 1, details: `Você venceu: ${details[3]}` };
    }
  }
}

function updateUI(
  currentRound,
  computerMove,
  playerMove,
  evaluation,
  playerScore,
  computerScore
) {
  const currentRoundElement = document.querySelector(".current-round");
  const computerMoveElement = document.querySelector(".computer-move");
  const playerMoveElement = document.querySelector(".player-move");
  const roundResultElement = document.querySelector(".round-result");
  const playerScoreElement = document.querySelector("#player-score");
  const computerScoreElement = document.querySelector("#computer-score");

  // If no arguments, reset UI
  if (arguments.length === 0) {
    currentRoundElement.textContent = 1;
    computerMoveElement.textContent = "...";
    playerMoveElement.textContent = "...";
    roundResultElement.textContent = "...";
    playerScoreElement.textContent = 0;
    computerScoreElement.textContent = 0;
  } else {
    const wepaonsTranslation = {
      rock: "pedra",
      paper: "papel",
      scissors: "tesoura",
    };

    currentRoundElement.textContent = currentRound;
    computerMoveElement.textContent = wepaonsTranslation[computerMove];
    playerMoveElement.textContent = wepaonsTranslation[playerMove];
    roundResultElement.textContent = evaluation.details;
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
  }
}

function gameOverAlert(playerWin) {
  const alertDiv = document.querySelector(".game-over-alert");
  const winnerSpan = document.querySelector(".winner");

  alertDiv.classList.remove("hidden");
  winnerSpan.textContent = playerWin ? "Você" : "O computador";

  return new Promise((resolve) => {
    const restartButton = document.querySelector(".restart-game");

    function handleClick() {
      alertDiv.classList.add("hidden");
      restartButton.removeEventListener("click", handleClick);
      resolve();
    }

    restartButton.addEventListener("click", handleClick);
  });
}

(async function gameLoop() {
  while (true) {
    updateUI();

    let playerScore = 0,
      computerScore = 0,
      currentRound = 1;

    while (playerScore < 5 && computerScore < 5) {
      const playerMove = await getPlayerMove();
      const computerMove = getComputerMove();
      const evaluation = evaluateMoves(playerMove, computerMove);

      if (evaluation.result === 1) playerScore++;
      else if (evaluation.result === 2) computerScore++;
      currentRound++;

      updateUI(
        currentRound,
        computerMove,
        playerMove,
        evaluation,
        playerScore,
        computerScore
      );
    }

    await gameOverAlert(playerScore > computerScore);
  }
})();
