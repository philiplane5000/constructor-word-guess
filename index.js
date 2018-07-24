let Word = require('./word');
let inquirer = require('inquirer');

let SATWords = ['abate', 'aesthetic', 'austere', 'benevolent', 'civic', 'demur', 'dubious', 'egregious', 'freewheeling', 'melodramatic', 'postulate', 'abscond', 'alacrity', 'ebullient', 'modicum', 'munificent', 'pernicious', 'platitude', 'plaudit', 'sanguine', 'solipsism', 'umbrage', 'zephyr', 'wily']
// let placeHolder = "";

let generateNewWord = (array) => {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

let newGame = () => {
    let unknownWord = new Word(generateNewWord(SATWords))

    console.log(unknownWord.charArray);
    console.log(unknownWord.returnWordString());
    console.log(unknownWord.checkGuess('a'));
}

newGame();


