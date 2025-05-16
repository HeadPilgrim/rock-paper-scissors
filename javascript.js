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

function getHumanChoice() {
    choice = prompt("Please enter rock, paper, or scissors: ")
    choice = choice.toLowerCase();
    if (choice === "rock"){
        return "rock"
    }
    if (choice === "paper"){
        return "paper"
    }
    if (choice === "scissors"){
        return "scissors"
    }
}


function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        return 2
    }
    if (computerChoice === "rock" && playerChoice === "paper"){
        return 0
    }
    if (computerChoice === "paper" && playerChoice === "rock") {
        return 0
    }
    if (computerChoice === "scissor" && playerChoice === "paper") {
        return 0
    }
    else {
        return 1
    }

}

function playGame() {
    i = 5
    hScore = 0
    cScore = 0
    
    while (i > 0) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComptuterChoice();
        game = playRound(computerSelection,humanSelection)
        if (game === 0){
            cScore += 1
            console.log(`You lose! ${computerSelection} beats ${humanSelection}`)
            console.log(`Score is: Human: ${hScore} Computer ${cScore}`)
        }
        if (game === 1){
            hScore += 1
            console.log(`You win! ${humanSelection} beats ${computerSelection}`)
            console.log(`Score is: Human: ${hScore} Computer ${cScore}`)
        }
        if (game === 2){
            console.log(`Tie! Both played ${humanSelection}`)
            console.log(`Score is: Human: ${hScore} Computer ${cScore}`)
        }
        i-=1
    }
    if (hScore > cScore) {
        return 0
    }
    if (cScore > hScore) {
        return 1
    }
    else {
        return 2
    }
}

function main() {
    result = playGame()
    if (result === 0) {
        console.log("The Humans wins!")
    }
    if (result === 1) {
        console.log("The Computer wins!")
    }
    else {
        console.log("The game is a complete TIE!!!")
    }
}

main()
