function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 10);
  if (computerChoice < 3) {
    return "Computer choose rock";
  } else if (computerChoice >= 3 && computerChoice <= 6) {
    return "Computer choose paper";
  } else {
    return "Computer choose scissors";
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
    return "anda memilih rock.";
  } else if (choice === "paper") {
    return "anda memilih paper.";
  } else if (choice === "scissors") {
    return "anda memilih scissors.";
  } else {
    return "pilihan anda tidak diterima. silahkan reload halamannya.";
  }
}

console.log(getHumanChoice());
