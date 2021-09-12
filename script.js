let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    let humanDiff = Math.abs(targetGuess - humanGuess);
    let compDiff = Math.abs(targetGuess - computerGuess);
    return humanDiff <= compDiff;
}

const updateScore = winner => {
    if(winner === 'human'){
        humanScore++;
    }else if(winner === 'computer'){
        computerScore++;
    }
}

const advanceRound = () => currentRoundNumber++;