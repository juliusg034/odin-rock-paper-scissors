function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if(choice === 0) {
        return "rock";
    } else if(choice === 1) {
        return "paper";
    } else if(choice === 2) {
        return "scissors";
    }
}

function getPlayerChoice() {
    let choice = prompt("Enter a move (rock, paper, or scissors): ");
    choice = choice.toLowerCase();
    return choice;
}

function play(playerSelection, computerSelection) {
    
    if(playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose! Paper beats Rock";
    }

    if(playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats Paper";
    }

    if(playerSelection == "scissors" && computerSelection == "scissors") {
        return "You tied!"
    }

    if(playerSelection == "rock" && computerSelection == "rock") {
        return "You tied!"
    }

    if(playerSelection == "rock" && computerSelection == "paper") {
        return ("You lose! Paper beats Rock")
    }

    if(playerSelection == "rock" && computerSelection == "scissors") {
        return ("You win! Rock beats Scissors")
    }

    if(playerSelection == "paper" && computerSelection == "rock") {
        return ("You win! Paper beats Rock")
    }

    if(playerSelection == "paper" && computerSelection == "paper") {
        return("You tie!")
    }

    if(playerSelection == "paper" && computerSelection == "scissors") {
        return("You lose! Scissors beats paper")
    }

}

function game() {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(play(playerSelection, computerSelection));
}