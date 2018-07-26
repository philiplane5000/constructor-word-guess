let Word        = require('./word');
let gamewords   = require('./words');
let inquirer    = require('inquirer');
let guessesRemaining = 10;
let wordToGuess;

setWord();
promptUserGuess();

function generateNewWord(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function setWord() {
    wordToGuess = new Word(generateNewWord(gamewords));
}

function promptUserGuess() {
    if (guessesRemaining > 0) {
        inquirer.prompt([
            {
                input: "text",
                message: "Guess a letter: ",
                name: "guess"
            }
        ]).then(answer => {
            if (wordToGuess.deductGuessOrAlert(answer.guess) === true) { guessesRemaining-- }
            wordToGuess.checkGuess(answer.guess);
            wordToGuess.returnWordString();
            console.log(`Guesses Left: ${guessesRemaining}\n`);
            if (wordToGuess.alertChampion() === true) {
                console.log('CONGRATULATIONS!');
                playAgain();
                return
            } else {
                promptUserGuess(wordToGuess);
            }
        })
    } else {
        console.log('**********')
        console.log('GAME OVER!')
        console.log('**********')
        console.log(`THE WORD THAT STUMPED YOU WAS:  "${wordToGuess.answer}" `);
        playAgain();
    }
}

function playAgain() {
    inquirer.prompt([
        {
            message: '\nPLAY AGAIN?',
            type: 'confirm',
            name: 'newGame'
        }
    ]).then(answer => {
        if (answer.newGame) {
            guessesRemaining = 10;
            setWord();
            promptUserGuess();
        } else {
            console.log('GOODBYE!');
        }
    })
}



