function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0)
        return "rock";
    else if (choice === 1)
        return "paper";
    else
        return "scissors";
}
function getHumanChoice() {
    return prompt("Enter any of options(rock or paper or scissors)");
}
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (computerChoice === "rock") {
        if (humanChoice === "paper") {
            console.log("You win!Paper beats Rock");
            humanScore++;
        }
        else if (humanChoice === "scissors") {
            console.log("You Lose!Rock beats Scissors");
            computerScore++;
        }
        else {
            console.log("It's a tie,Play Again");
            return playRound(getHumanChoice(), getComputerChoice());
        }

    }
    else if (computerChoice === "paper") {
        if (humanChoice === "scissors") {
            console.log("You win!Scissors beat Paper");
            humanScore++;
        }
        else if (humanChoice === "rock") {
            console.log("You Lose!Paper beats Rock");
            computerScore++;
        }
        else {
            console.log("It's a tie,Play Again");
            return playRound(getHumanChoice(), getComputerChoice());

        }
    }
    else {
        if (humanChoice === "rock") {
            console.log("You win!Rock beats Scissors");
            humanScore++;
        }
        else if (humanChoice === "paper") {
            console.log("You Lose!Scissors beat Paper");
            computerScore++;
        }
        else {
            console.log("It's a tie,Play Again");
            return playRound(getHumanChoice(), getComputerChoice());
        }
    }
}
function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score:${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You win!");
    }
    else {
        console.log("You Lose");
    }
}
playGame()