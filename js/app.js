function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const choice = prompt(
    "silahkan pilih rock, paper atau scissors:"
  ).toLowerCase();

  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    console.log(
      "Pilihan tidak valid. Harap masukkan rock, paper atau scissors."
    );
    return getHumanChoice(); // meminta ulang pilihan jika input tidak valid
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice == "paper") {
      console.log(
        `You choose ${humanChoice} and Computer choose ${computerChoice}`
      );
      console.log("You lose! Paper beats Rock");
      computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log(
        `You choose ${humanChoice} and Computer choose ${computerChoice}`
      );
      console.log("You Win!");
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log(
        `You choose ${humanChoice} and Computer choose ${computerChoice}`
      );
      console.log("You Win!");
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log(
        `You choose ${humanChoice} and Computer choose ${computerChoice}`
      );
      console.log("You lose! Scissors beats paper");
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log(
        `You choose ${humanChoice} and Computer choose ${computerChoice}`
      );
      console.log("You lose! Rock beats Scissors");
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log(
        `You choose ${humanChoice} and Computer choose ${computerChoice}`
      );
      console.log("You Win!");
      humanScore++;
    } else if (humanChoice === computerChoice) {
      console.log(
        `You choose ${humanChoice} and Computer choose ${computerChoice}`
      );
      console.log("It's a tie");
    }
  }

  // looping untuk 5 ronde
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score Human ${humanScore} : Computer ${computerScore}`);
  }
}

playGame();
