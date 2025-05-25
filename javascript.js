// Constants
const HUMAN_WIN = 1;
const COMPUTER_WIN = 0;
const TIE = 2;
const MAX_ROUNDS = 5;

// Game state
let humanScore = 0;
let computerScore = 0;
let rounds = 0;

// Cached DOM elements
const buttons = document.querySelectorAll("button[data-choice]");
const container = document.getElementById("container");
const pScoreElem = document.getElementById("pScore");
const cScoreElem = document.getElementById("cScore");

// Create output div
const outputDiv = document.createElement("div");
outputDiv.setAttribute("id", "output");
outputDiv.style.fontWeight = "bold";
outputDiv.style.gap = "8px"
container.appendChild(outputDiv);

// Create reset button (initially hidden)
const resetBtn = document.createElement("button");
resetBtn.textContent = "Play Again";
resetBtn.style.display = "none";
resetBtn.style.gap = "8px"
resetBtn.addEventListener("click", resetGame);
container.appendChild(resetBtn);

// Get a random computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Determine winner of a round
function playRound(computer, player) {
  if (computer === player) return TIE;

  const winMap = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  return winMap[player] === computer ? HUMAN_WIN : COMPUTER_WIN;
}

// Update round result in the UI
function displayRoundResult(result, computerChoice, playerChoice) {
  switch (result) {
    case COMPUTER_WIN:
      computerScore++;
      cScoreElem.textContent = computerScore;
      outputDiv.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
      break;
    case HUMAN_WIN:
      humanScore++;
      pScoreElem.textContent = humanScore;
      outputDiv.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
      break;
    case TIE:
      outputDiv.textContent = `Tie! Both chose ${playerChoice}.`;
      break;
  }
}

// Display final winner after all rounds
function displayFinalWinner() {
  if (humanScore > computerScore) {
    outputDiv.textContent += `\nThe Human wins the game!`;
  } else if (computerScore > humanScore) {
    outputDiv.textContent += `\nThe Computer wins the game!`;
  } else {
    outputDiv.textContent += `\nThe game is a complete TIE!!!`;
  }

  // Disable buttons and show reset
  buttons.forEach(btn => (btn.disabled = true));
  resetBtn.style.display = "inline-block";
}

// Reset game state and UI
function resetGame() {
  humanScore = 0;
  computerScore = 0;
  rounds = 0;
  pScoreElem.textContent = "0";
  cScoreElem.textContent = "0";
  outputDiv.textContent = "";
  resetBtn.style.display = "none";
  buttons.forEach(btn => (btn.disabled = false));
}

// Play one round
function handleChoice(playerChoice) {
  if (rounds >= MAX_ROUNDS) return;

  const computerChoice = getComputerChoice();
  const result = playRound(computerChoice, playerChoice);

  displayRoundResult(result, computerChoice, playerChoice);
  rounds++;

  if (rounds === MAX_ROUNDS) {
    displayFinalWinner();
  }
}

// Attach click listeners to each button
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;
    handleChoice(playerChoice);
  });
});