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
    
    if (computerSelection == "ROCK" && playerSelection == "pa") {
        alert("P P, C R");
        pWin = true;
    }
    else if (computerSelection == "ROCK" && playerSelection == "sci") {
        alert("C R, P S");
        pWin = false;        
    }
    else if (computerSelection == "PAPER" && playerSelection == "ro") {
        alert("C P, P R");
        pWin = false;
    }
    else if (computerSelection == "PAPER" && playerSelection == "sci") {
        alert("C P, P S");
        pWin = true;      
    }
    else if (computerSelection == "SCISSORS" && playerSelection == "ro") {
        alert("C S, P R");
        pWin = true;
        
    }
    else if (computerSelection== "SCISSORS" && playerSelection == "pa") {
        alert("P S, P P");
        pWin = false;       
    }
    else {
        return "TIES";
    }
    return "pWin";

  }

function game() {
    let pscore = 0;
    let cscore = 0;
    if (pwin) {
        pscore += 1;
    }
    else {
        cscore += 1;
    }
    if (pscore > cscore) {
        console.log(`Player win`);
    }
    else {
        console.log(`Computer win`);
    }
    console.log(`PS: ${pscore}`);
    console.log(`CS: ${cscore}`);
}



