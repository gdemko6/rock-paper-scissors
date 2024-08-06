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



const buttons = document.querySelectorAll(".buttons");
buttons.forEach(button => {
    button.onclick = () => playRound(button.textContent, getComputerChoice());
});




function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock" && computerChoice == "rock"){
        console.log("Tie! You both chose rock.");
    } else if (humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats rock.");
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats scissors.");
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose! Rock beats scissors.");
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You win! Scissors beats paper.");
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "scissors"){
        console.log("Tie! You both chose scissors.");
    } else if (humanChoice == "paper" && computerChoice == "rock"){
        console.log("You win! Paper beats rock.");
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "paper"){
        console.log("Tie! You both chose paper.");
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose! Scissors beats paper.");
        computerScore++;
    }
}