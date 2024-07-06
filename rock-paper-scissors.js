let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice;
    let randNum = Math.floor(Math.random()*3)+1;
    if (randNum == 1){
        computerChoice="rock";
    }
    else if (randNum == 2){
        computerChoice="paper";
    }
    else if (randNum == 3){
        computerChoice="scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?");
    return humanChoice;
}