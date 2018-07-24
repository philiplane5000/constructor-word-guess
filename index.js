let Word = require('./word');
let inquirer = require('inquirer');

let SATWords = ['abate', 'aesthetic', 'austere', 'benevolent', 'civic', 'demur', 'dubious', 'egregious', 'freewheeling', 'melodramatic', 'postulate', 'abscond', 'alacrity', 'ebullient', 'modicum', 'munificent', 'pernicious', 'platitude', 'plaudit', 'sanguine', 'solipsism', 'umbrage', 'zephyr', 'wily']

let returnNewWord = (array) => {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

let newGame = () => {
    let unknownWord = new Word(returnNewWord(SATWords))
    console.log(unknownWord);
}

newGame();

// console.log(word.objArray[0].checkChar('a'));
// console.log(word.objArray[0].toString());


