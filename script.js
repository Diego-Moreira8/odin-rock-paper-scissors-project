function computerPlay() {
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

// test function
// for (let i = 0; i < 1000; i++) {
//   console.log(computerPlay());
// }
