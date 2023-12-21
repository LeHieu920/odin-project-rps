function getComputerChoice(rps) {
    rps = Math.floor(Math.random() * 3);
    switch(rps) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt().toUpperCase();
    computerSelection = getComputerChoice().toUpperCase();
    if (computerSelection == "ROCK" && playerSelection == "PAPER") {
        pWin = true;
    }
    else if (computerSelection == "ROCK" && playerSelection == "SCISSORS") {
        pWin = false;
    }
    else if (computerSelection == "PAPER" && playerSelection == "ROCK") {
        pWin = false;
    }
    else if (computerSelection == "PAPER" && playerSelection == "SCISSORS") {
        pWin = true;
    }
    else if (computerSelection == "SCISSORS" && playerSelection == "ROCK") {
        pWin = true;
    }
    else if (computerSelection== "SCISSORS" && playerSelection == "PAPER") {
        pWin = false;
    }
    else {
        return "TIES";
    }
    return pWin;
  }