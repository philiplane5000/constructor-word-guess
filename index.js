let Word = require('./word');
let inquirer = require('inquirer');

let SATWords = ['abate', 'aesthetic', 'austere', 'benevolent', 'civic', 'demur', 'dubious', 'egregious', 'freewheeling', 'melodramatic', 'postulate', 'abscond', 'alacrity', 'ebullient', 'modicum', 'munificent', 'pernicious', 'platitude', 'plaudit', 'sanguine', 'solipsism', 'umbrage', 'zephyr', 'wily']
let guessesRemaining = 10;
// let numTrue = 0;
// let correctGuessTally = 0;
let wordToGuess;
let wordPlaceHolder = "";

let generateNewWord = (array) => {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

let setWord = () => {
    wordToGuess = new Word(generateNewWord(SATWords));
}

setWord();

// console.log(wordToGuess.charArray);

let promptUserGuess = () => {

    if (guessesRemaining > 0) {

        inquirer.prompt([
            {
                message: "Guess a letter: ",
                input: "text",
                name: "guess"
            }

        ]).then(answer => {

            if (wordToGuess.deductOneGuessOrNot(answer.guess) === true) { guessesRemaining--}
            wordToGuess.checkGuess(answer.guess);
            wordToGuess.returnWordString();
            console.log(guessesRemaining);
            promptUserGuess(wordToGuess);
        })

    } else {
        console.log('GAME OVER!')
        //run inquirer prompt "Play again?" --> newGame()
    }

}
promptUserGuess();




