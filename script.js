let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, secretNumber) {
  return (Math.abs(humanGuess - secretNumber) <= Math.abs(computerGuess - secretNumber));
}

function updateScore(str) {
  if (str === "human") return humanScore++;
  if (str === "computer") return computerScore++;
}

function advanceRound() {
  return currentRoundNumber++;
}
