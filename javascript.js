function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}


// Probably gonna need to pass in the computer choice?
function outputWinner(result){

    const winnerDiv = document.getElementById("output");

    if (result === 0) {
        winnerDiv.textContent = "The Human wins!"
    } 
    else if (result === 1) {
        winnerDiv.textContent = "The Computer wins!"
    } 
    else {
        winnerDiv.textContent = "The game is a complete TIE!!!"
    }
}

//Uses a dictionary of win conditions -> computerChoice:humanChoice
function playRound(computer, player) {
    if (computer === player) return 2; // tie

    const winMap = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    return winMap[player] === computer ? 1 : 0;
}

let humanScore = 0;
let computerScore = 0;

function playGame(buttonChoice) {

    let hTextScore = document.getElementById("pScore");
    let cTextScore = document.getElementById("cScore");

    //Testing onButtonClick remove later or move probably
    // output(buttonChoice);

    const computerChoice = getComputerChoice();
    const result = playRound(computerChoice, buttonChoice);


    let text = document.getElementById('output');

    if (result === 0) {
        computerScore++;
        text.textContent = `You lose! ${computerChoice} beats ${buttonChoice}`;
        cTextScore.textContent = computerScore;
    } else if (result === 1) {
        humanScore++;
        text.textContent = `You win! ${buttonChoice} beats ${computerChoice}`;
        hTextScore.textContent = humanScore;
    } else {
        text.textContent =`Tie! Both chose ${buttonChoice}`;
    }

    if (humanScore > computerScore) return 0;
    if (computerScore > humanScore) return 1;
    return 2;
}

let rounds = 0;

const buttons = document.querySelectorAll("button");


const container = document.getElementById("container");
const lastChild = container.lastElementChild;

const outDiv = document.createElement("div");
outDiv.setAttribute('id', 'output')
outDiv.style.fontWeight = "bold"
container.insertBefore(outDiv, lastChild);

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (rounds < 5) {
            let winner = playGame(button.textContent.trim().toLowerCase());
            rounds += 1;

            if (rounds === 5) {
                // Disable all buttons after 5 rounds
                buttons.forEach(btn => btn.disabled = true);
                outputWinner(winner);
            }
        }
    });
});
