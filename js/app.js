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
