//Get computer choice
//Get user choice
//Compare choices
//Track user and computer score
//Write logic to play a single round
//Then make it work for 5 whole rounds

//rock beats paper
//paper beats rock
//scissors beats paper

function getComptuterChoice() {
    choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock"
    }
    if (choice === 1) {
        return "paper"
    }
    if (choice === 2) {
        return "scissors"
    }
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    while (true) {
        const input = prompt("Please enter rock, paper, or scissors: ").toLowerCase();
        if (["rock", "paper", "scissors"].includes(input)) {
            return input;
        }
        console.log("Invalid input. Try again.");
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

function playGame(rounds = 5) {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < rounds; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(computerChoice, humanChoice);

        if (result === 0) {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        } else if (result === 1) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else {
            console.log(`Tie! Both chose ${humanChoice}`);
        }

        console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
    }

    if (humanScore > computerScore) return 0;
    if (computerScore > humanScore) return 1;
    return 2;
}

function main() {
    const result = playGame();
    if (result === 0) {
        console.log("The Humans win!");
    } else if (result === 1) {
        console.log("The Computer wins!");
    } else {
        console.log("The game is a complete TIE!!!");
    }
}

main();
