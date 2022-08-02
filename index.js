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


function getWinner(playerSelection, computerSelection) {
    
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



const rock = document.querySelector('.rock-button');
rock.addEventListener('click', () => {
    let playerChoice = 'rock';
    const computerSelection = getComputerChoice();
    console.log(getWinner(playerChoice, computerSelection));

})

const paper = document.querySelector('.paper-button');
paper.addEventListener('click', () => {
    let playerChoice = 'paper';
    const computerSelection = getComputerChoice();
    console.log(getWinner(playerChoice, computerSelection));
})

const scissors = document.querySelector('.scissors-button');
scissors.addEventListener('click', () => {
    let playerChoice = 'scissors';
    const computerSelection = getComputerChoice();
    console.log(getWinner(playerChoice, computerSelection));
})

