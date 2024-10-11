function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 10);
  if (computerChoice < 3) {
    return "rock";
  } else if (computerChoice >= 3 && computerChoice <= 6) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const choice = prompt(
    "silahkan pilih rock, paper atau scissors:"
  ).toLowerCase();

  if (choice === "rock") {
    return "rock";
  } else if (choice === "paper") {
    return "paper";
  } else if (choice === "scissors") {
    return "scissors";
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
      computerChoice++;
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
    } else {
      console.log(
        `You choose ${humanChoice} and Computer choose ${computerChoice}`
      );
      console.log("Your input is invalid!");
    }
  }

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);

  console.log(`Score Human ${humanScore} : Computer ${computerScore}`);
}

playGame();
playGame();
playGame();
playGame();
playGame();
