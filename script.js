function getComputerChoice(){
    randInt = Math.floor(Math.random()*3);
    let compChoice = randInt === 0 ? "rock" : 
        randInt === 1 ? "paper" : "scissors";

    return compChoice;
}

function getHumanChoice(playerChoice){
    // input = prompt("Choose between R, P, or S!");
    // input = input.toLowerCase();

    // humanChoice = input === "r" ? "rock" : 
    // input === "p" ? "paper" : 
    // input === "s" ? "scissors" : alert("Please try again!");

    humanChoice = playerChoice === "rock" ? "r":
        playerChoice === "paper" ? "p": "s";
        console.log(humanChoice);

    return humanChoice
}

function checkWin(choice1, choice2){
    if (choice1 === choice2) return 0.5;
    if (choice1 === "rock"){
        return choice2 === "paper" ? 0 : 1;
    }
    else if(choice1 === "paper"){
        return choice2 === "scissors" ? 0 : 1;
    }
    else{
        return choice2 === "rock" ? 0 : 1;
    }
}

function playRound(humanChoice){
    compChoice = getComputerChoice();

    winScore = checkWin(humanChoice, compChoice);
    
    if (winScore === 1){
        alert("You win! " + humanChoice + " beats " + compChoice);
    }
    else if(winScore === 0){
        alert("You lose! " + humanChoice + " loses to " + compChoice);
    }
    else{
        alert("You draw! " + humanChoice + " draws " + compChoice);
    }
    return winScore;
}

function playGame(){
    let humanScore = 0;
    let compScore = 0;

    for(let i=0; i<5; i++){
        playRound();
        if (results === 1){
            humanScore++;
        }
        else if(results === 0){
            compScore++;
        }
        alert(`The current score is Player: ${humanScore}, Computer: ${compScore}`);
    }
}

const buttons = document.querySelectorAll('button');
const results = document.querySelector('#results');
let playerScore = 0;
let computerScore = 0;

results.textContent = `Player: ${playerScore} Computer: ${computerScore}`;

function updateScore(result) {
    if (result === 1) {
        playerScore++;
    } else if (result === 0) {
        computerScore++;
    }
    results.textContent = `Player: ${playerScore} Computer: ${computerScore}`;

    if (playerScore === 5) {
        alert('Player wins!');
        playerScore = 0;
        computerScore = 0;
        results.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    } else if (computerScore === 5) {
        alert('Computer wins!');
        playerScore = 0;
        computerScore = 0;
        results.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    }

}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        console.log(playerChoice);
        updateScore(playRound(playerChoice));
    });
});