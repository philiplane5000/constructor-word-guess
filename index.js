let Word = require('./word');
let inquirer = require('inquirer');

let SATWords = ['abate', 'aesthetic', 'austere', 'benevolent', 'civic', 'demur', 'dubious', 'egregious', 'freewheeling', 'melodramatic', 'postulate', 'abscond', 'alacrity', 'ebullient', 'modicum', 'munificent', 'pernicious', 'platitude', 'plaudit', 'sanguine', 'solipsism', 'umbrage', 'zephyr', 'wily']
let count = 10;
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

console.log(wordToGuess.charArray);

let promptUserGuess = () => {

    if (count > 0) {

        inquirer.prompt([
            {
                message: "Guess a letter: ",
                input: "text",
                name: "guess"
            }

        ]).then(answer => {
            wordToGuess.checkGuess(answer.guess);
            wordToGuess.returnWordString();
            // let wordToGuess = wordToGuess;
            count--;
            promptUserGuess(wordToGuess);
        })

    } else {
        console.log('GAME OVER!')
        //run inquirer prompt "Play again?" --> newGame()
    }

}
promptUserGuess();




