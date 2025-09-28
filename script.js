function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0)
        return "rock";
    else if (choice === 1)
        return "paper";
    else
        return "scissors";
}

let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (computerChoice === "rock") {
        if (humanChoice === "paper") {
            console.log("You win!Paper beats Rock");
            humanScore++;
            roundresult.textContent = "You win!Paper beats Rock";
        }
        else if (humanChoice === "scissors") {
            console.log("You Lose!Rock beats Scissors");
            computerScore++;
            roundresult.textContent = "You Lose!Rock beats Scissors";
        }
        else {
            console.log("It's a tie,Play Again");
            roundresult.textContent = "It's a tie,Play Again";
        }

    }
    else if (computerChoice === "paper") {
        if (humanChoice === "scissors") {
            console.log("You win!Scissors beat Paper");
            humanScore++;
            roundresult.textContent = "You win!Scissors beat Paper";
        }
        else if (humanChoice === "rock") {
            console.log("You Lose!Paper beats Rock");
            computerScore++;
            roundresult.textContent = "You Lose!Paper beats Rock";
        }
        else {
            console.log("It's a tie,Play Again");
            roundresult.textContent = "It's a tie,Play Again";

        }
    }
    else {
        if (humanChoice === "rock") {
            console.log("You win!Rock beats Scissors");
            humanScore++;
            roundresult.textContent = "You win!Rock beats Scissors";
        }
        else if (humanChoice === "paper") {
            console.log("You Lose!Scissors beat Paper");
            computerScore++;
            roundresult.textContent = "You Lose!Scissors beat Paper";
        }
        else {
            console.log("It's a tie,Play Again");
            roundresult.textContent = "It's a tie,Play Again";
        }
    }
}
let userChoice = document.querySelector(".userchoices");
let result = document.querySelector(".result");
let compresult = document.querySelector(".result .compScoreMessage");
let humresult = document.querySelector(".result .humScoreMessage");
let finalResult = document.createElement("div");
let roundresult = document.querySelector(".roundresult");
let playAgain = document.createElement("button");
playAgain.textContent = 'Play Again';
playAgain.classList.add("playagainbutton");

let computerScoreText = document.createElement("span");
computerScoreText.textContent = "Computer Score: ";
computerScoreText.style.color = "red";
let compScoreMessage = document.createElement("span");
compresult.appendChild(computerScoreText);
compresult.appendChild(compScoreMessage);

let humanScoreText = document.createElement("span");
humanScoreText.textContent = "Your Score: ";
humanScoreText.style.color = "blue";
let humScoreMessage = document.createElement("span");
humresult.appendChild(humanScoreText);
humresult.appendChild(humScoreMessage);

userChoice.addEventListener("click", event => {
    if (humanScore < 5 && computerScore < 5) {
        playRound(event.target.id, getComputerChoice());
        compScoreMessage.textContent = `${computerScore}`;
        humScoreMessage.textContent = `${humanScore}`;
    }
   if(computerScore==5||humanScore==5){

        if (computerScore >= 5) {
            finalResult.textContent = 'You lost Dude no worries you can try again';
        }
        else {
            finalResult.textContent = 'Hey you won!Wanna Play Again?';
        }
        result.appendChild(finalResult);
        result.appendChild(playAgain);
    }
});
playAgain.addEventListener('click', (e) => {
            humanScore = 0;
            computerScore = 0;
            compScoreMessage.textContent = ``;
            humScoreMessage.textContent = ``;
            finalResult.textContent = '';
            roundresult.textContent='';
            e.target.parentNode.removeChild(e.target);;
        });