function getComputerChoice(words){
    let randomIndex = Math.floor((Math.random() * words.length));
    console.log(randomIndex);
    return words[randomIndex];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return true;
    }
    else{
        return false;
    }
}

function playGame(times){
    let words = ["rock", "paper", "scissors"];
    
    for (let i=0; i<times; i++){
        const playerSelection = prompt("Rock paper scissor");
        const computerSelection = getComputerChoice(words);
        let result = playRound(playerSelection, computerSelection);
        if (result){
            console.log("Won");
        }
        else{
            console.log("Lose");
        }   
    }
}
playGame(5);

