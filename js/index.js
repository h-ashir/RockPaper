function getComputerChoice(){
    let randomIndex = Math.floor((Math.random() * words.length));
    console.log("Computer: " + words[randomIndex]);
    return words[randomIndex];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection){
    const computerSelection = getComputerChoice();
    if (playerSelection === computerSelection){
        console.log("It's a tie");
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "scissors" && computerSelection == "paper") || 
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        console.log("You win");
        ++playerScore;
    }
    else{
        console.log("Computer win");
        ++computerScore;
    }
    player.textContent = "Player: " + playerScore;
    computer.textContent = "Computer: " + computerScore;
    if (playerScore === 5){
        result.textContent = "Player Wins";
        result.style.color = "green";
        playerScore = 0;
        computerScore = 0;
        restart.addEventListener("click", () => {
            result.textContent = "";
            player.textContent = "Player: " + "0";
            computer.textContent = "Computer: " + "0";
        });
    }
    else if (computerScore === 5){
        result.textContent = "Computer Wins";
        result.style.color = "red";
        playerScore = 0;
        computerScore = 0;
        restart.addEventListener("click", () => {
            result.textContent = "";
            player.textContent = "Player: " + "0";
            computer.textContent = "Computer: " + "0";
        });
    }
}

let words = ["rock", "paper", "scissors"];

const container = document.querySelector("#container");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");


rock.addEventListener("click", function() {
    playRound("rock");
});
paper.addEventListener("click", function() {
    playRound("paper");
});
scissor.addEventListener("click", function() {
    playRound("scissors");
});

const div = document.createElement("div");
div.style.border = "2px solid black";
div.style.background = "gray";
div.style.margin = "15px";
container.appendChild(div);

const player = document.createElement("p");
const computer = document.createElement("p");
player.textContent = "Player: " + playerScore;
computer.textContent = "Computer: " + computerScore;
div.appendChild(player);
div.appendChild(computer);

let result = document.createElement("h1");
result.style.fontSize = "25px"; 
div.appendChild(result);

const restart = document.querySelector("#restart");
