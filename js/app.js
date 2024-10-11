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

/* 
Step 3: Write the logic to get the human choice

Your game will be played by a human player. You will write a function that takes the user choice and returns it.

    Create a new function named getHumanChoice.
    Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
        Hint: Use the prompt method to get the user’s input.
    Test what your function returns by using console.log.

    saya akan menulis sebuah function yang mengambil pilihan user dan mengembalikannya. function nya bernama getHumanChoice yang akan mengembalikan salah satu dari pilihan yang valid tergantung dari input user. lalu test function nya mengembalikan apa dengan console log.

    - membuat sebuah function bernama getHumanChoice
    - user mengirimkan sebuah input dari salah satu pilihan yang valid
    - function nya mengembalikan input yang diterima dari user kalau valid (opt: rock, paper, scissors)
    - cek apakah input yang diterima oleh user itu valid?
    - kalau valid kembalikan input nya di console.log
    - kalau tidak valid, tampilkan alert dan minta user reload page nya

*/

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

/* 
Step 4: Declare the players score variables

Your game will keep track of the players score. You will write variables to keep track of the players score.

    Create two new variables named humanScore and computerScore in the global scope.
    Initialize those variables with the value of 0.

*/

let humanScore = 0;
let computerScore = 0;

/* 
Step 5: Write the logic to play a single round

Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

    Create a new function named playRound.
    Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
    Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
    Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
    Increment the humanScore or computerScore variable based on the round winner.

Example code:

function playRound(humanChoice, computerChoice) {
  // your code here!
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
*/

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
console.log(`Score Human ${humanScore} : Computer ${computerScore}`);
