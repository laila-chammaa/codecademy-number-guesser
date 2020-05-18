let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

let compareGuesses = (humanGuess, computerGuess, target) => {
    if (humanGuess > 9 || humanGuess < 0) {
        alert("out of range!");
    }
    else if (humanGuess === computerGuess) {
        return true;
    }
    //if the distance between the target and humanGuess is smaller, human wins.
    else if (Math.abs(humanGuess - target) < Math.abs(computerGuess - target)) {
        return true;
    }
    else {
        return false;
    }
}

let updateScore = (winner) => {
    winner === 'human' ? humanScore++ : computerScore++;
}

let advanceRound = () => {
    currentRoundNumber++;
}