/* ----- functions ----- */
// return random rock, paper, or scissors
function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    let rand = options[Math.floor(Math.random() * options.length)];
    return rand;
}

// increment player score & update on page + winning condition
function incrementPlayerScore() {
    let playerScore = document.querySelector('#playerScoreDisplay');
    let number = playerScore.innerHTML;
    number++;
    // winning condition
    if (number === 5) {
        resetScores();
        number = 0;
        message.textContent = "Player is the winner! Play again!";
    }
    playerScore.innerHTML = number;
}

// increment computer score & update on page + winning condition
function incrementComputerScore() {
    let computerScore = document.querySelector('#computerScoreDisplay');
    let number = computerScore.innerHTML;
    number++;
    // winning condition
    if (number === 5) {
        resetScores();
        number = 0;
        message.textContent = "Computer is the winner! Play again!";
    }
    computerScore.innerHTML = number;
}

// reset player and computer scores to 0
function resetScores() {
    let playerScore = document.querySelector('#playerScoreDisplay');
    let computerScore = document.querySelector('#computerScoreDisplay');
    let number = 0;
    playerScore.innerHTML = number;
    computerScore.innerHTML = number;
}

// compares two inputs and returns results (win, lose, tie)
function playRound(event) {
    const playerSelection = event.target.id;
    const computerSelection = computerPlay();
    
    // console.log("player", playerSelection);
    // console.log("comp", computerSelection);
    if (playerSelection === "reset") {
        message.textContent ="Score reset!"; // reset the score
        resetScores();
    } else if (playerSelection === computerSelection) { //if computer msg === userInput
        message.textContent ="It's a tie, try again…"; //send msg to user
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        message.textContent ="Paper covers rock! +1 to Computer.";
        // console.log(computerScore++);
        incrementComputerScore();
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        message.textContent ="Rock breaks scissors! +1 to Player.";
        // console.log(playerScore++);
        incrementPlayerScore();
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        message.textContent ="Paper covers rock! +1 to Player.";
        // console.log(playerScore++);
        incrementPlayerScore();
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        message.textContent ="Scissors cuts paper! +1 to Computer.";
        // console.log(computerScore++);
        incrementComputerScore();
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        message.textContent ="Rock breaks scissors! +1 to Computer.";
        // console.log(computerScore++);
        incrementComputerScore();
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        message.textContent ="Scissors cuts paper! +1 to Player.";
        // console.log(playerScore++);
        incrementPlayerScore();
    } else {
        message.textContent = "Invalid input, try again.";
    }
    return;
}
/* ----- end functions ----- */

// get DOM manipulatable message and scores
var message = document.querySelector('#message');
var playerScoreDisplay = document.querySelector('#playerScoreDisplay');
var computerScoreDisplay = document.querySelector('#computerScoreDisplay');

// attach event listeners to RPS buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", playRound)
});