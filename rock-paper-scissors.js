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
    button.onclick = () => {
        playRound(button.textContent, getComputerChoice());

    };
});

const results = document.querySelector("#results");
const score = document.querySelector("#score");


function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "rock"){
        results.innerHTML = "Tie! You both chose rock.";
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        results.innerHTML = "You lose! Paper beats rock.";
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        results.innerHTML = "You win! Rock beats scissors.";
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        results.innerHTML = "You lose! Rock beats scissors.";
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        results.innerHTML = "You win! Scissors beats paper.";
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "scissors"){
        results.innerHTML = "Tie! You both chose scissors.";
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        results.innerHTML = "You win! Paper beats rock.";
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "paper"){
        results.innerHTML = "Tie! You both chose paper.";
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        results.innerHTML = "You lose! Scissors beats paper.";
        computerScore++;
    }
    score.innerHTML = "Human: " + humanScore + " Computer: " + computerScore;
    if (humanScore === 5 || computerScore === 5){
        score.textContent = "Game over";
    }
}

