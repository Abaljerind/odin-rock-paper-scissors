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

  // function untuk menampilkan score
  function displayScore(humanScore, computerScore) {
    const score = document.createElement("p");
    score.style.color = "#D5FEF5";
    score.textContent = `Score: Player ${humanScore} v.s Computer ${computerScore}`;
    output.appendChild(score);
  }

  // function untuk mengecek antara player dan computer, mana yang lebih dulu mencapai score 5
  function checkForWinner(humanScore, computerScore) {
    if (humanScore === 5) {
      const p = document.createElement("p");
      p.textContent = `Congratulations! You beat the computer with score ${humanScore} to ${computerScore}`;
      output.appendChild(p);

      rockButton.disabled = true;
      paperButton.disabled = true;
      scissorsButton.disabled = true;

      replay();
    }

    if (computerScore === 5) {
      const p = document.createElement("p");
      p.textContent = `Losses are part of the game! You lost from the computer with score ${humanScore} to ${computerScore}`;
      output.appendChild(p);

      rockButton.disabled = true;
      paperButton.disabled = true;
      scissorsButton.disabled = true;

      replay();
    }
  }

  // function replay untuk mengulang permainan
  function replay() {
    setTimeout(() => {
      const replay = prompt("Do you want to replay? (yes or no)").toLowerCase();
      if (replay === "yes" || replay === "y") {
        window.location.reload();
      }
    }, 2000);
  }

  rockButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
    displayScore(humanScore, computerScore);
    checkForWinner(humanScore, computerScore);
  });

  paperButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
    displayScore(humanScore, computerScore);
    checkForWinner(humanScore, computerScore);
  });

  scissorsButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("scissors", computerChoice);
    displayScore(humanScore, computerScore);
    checkForWinner(humanScore, computerScore);
  });
}

playGame();
