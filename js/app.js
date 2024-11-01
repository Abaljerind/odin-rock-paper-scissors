const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

const output = document.querySelector(".output");

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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice == "paper") {
      const p = document.createElement("p");
      p.textContent = `You lose! Paper wraps Rock`;
      output.appendChild(p);
      computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      const p = document.createElement("p");
      p.textContent = `You Win! Rock breaks Scissors`;
      output.appendChild(p);
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      const p = document.createElement("p");
      p.textContent = `You Win! Paper wraps Rock`;
      output.appendChild(p);
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      const p = document.createElement("p");
      p.textContent = `You lose! Scissors cuts paper`;
      output.appendChild(p);
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      const p = document.createElement("p");
      p.textContent = `You lose! Rock breaks Scissors`;
      output.appendChild(p);
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      const p = document.createElement("p");
      p.textContent = `You Win! Scissors cuts paper`;
      output.appendChild(p);
      humanScore++;
    } else if (humanChoice === computerChoice) {
      const p = document.createElement("p");
      p.textContent = `It's a tie, Both of you choose ${humanChoice}`;
      output.appendChild(p);
    }
  }

  rockButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
  });

  paperButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
  });

  scissorsButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("scissors", computerChoice);
  });
}

playGame();
