let Word = require('./word');
let inquirer = require('inquirer');

let SATWords = ['abate', 'aesthetic', 'austere', 'benevolent', 'civic', 'demur', 'dubious', 'egregious', 'freewheeling', 'melodramatic', 'postulate', 'abscond', 'alacrity', 'ebullient', 'modicum', 'munificent', 'pernicious', 'platitude', 'plaudit', 'sanguine', 'solipsism', 'umbrage', 'zephyr', 'wily']
let guessesRemaining = 10;
let wordToGuess;
// let wordPlaceHolder = "";

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
                input: "text",
                message: "Guess a letter: ",
                name: "guess"
            }

        ]).then(answer => {

            if (wordToGuess.deductGuessOrAlert(answer.guess) === true) { guessesRemaining--}
            wordToGuess.checkGuess(answer.guess);
            wordToGuess.returnWordString();
            console.log(`Guesses Left: ${guessesRemaining}\n`);
            if(wordToGuess.alertChampion() === true) {
                console.log('CONGRATULATIONS!');
            } else {
                promptUserGuess(wordToGuess);
            }
        })

    } else {
        console.log('**********')
        console.log('GAME OVER!')
        console.log('**********')
        console.log(`THE WORD THAT STUMPED YOU WAS:  "${wordToGuess.answer}" `);
        //run inquirer prompt "Play again?" --> newGame()
    }

}
promptUserGuess();




