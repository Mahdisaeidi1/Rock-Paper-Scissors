const buttonEl = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
let playerScore = 0;
let computerScore = 0; 

buttonEl.forEach((button) => {
    button.addEventListener('click', () =>{
    const result = playRound(button.id, computerPlay());  
    resultEl.textContent = result;      
    });
});

function computerPlay(){
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
};

function playRound(playerSelection,compterSelection){
    console.log(playerSelection);
    console.log(compterSelection);

    if(playerSelection == compterSelection){
        return "It's a tie!"
    }else if((playerSelection === "rock" && compterSelection === "scissors")||

        (playerSelection === "paper" &&  compterSelection === "rock") ||
        (playerSelection === "scissors" && compterSelection === "paper") 
    ){ 
        playerScore++
        playerScoreEl.textContent = playerScore;
        return "You Win!" + playerSelection + " beats " + compterSelection;
    
    }else{
        computerScore++
        computerScoreEl.textContent = computerScore;
        return "You lose!" + compterSelection + " beats " + playerSelection;
    }
}