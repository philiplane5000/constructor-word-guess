let Word = require('./word');
let inquirer = require('inquirer');

let SATWords = ['abate', 'aesthetic', 'austere', 'benevolent', 'civic', 'demur', 'dubious', 'egregious', 'freewheeling', 'melodramatic', 'postulate', 'abscond', 'alacrity', 'ebullient', 'modicum', 'munificent', 'pernicious', 'platitude', 'plaudit', 'sanguine', 'solipsism', 'umbrage', 'zephyr', 'wily']

let returnNewWord = (array) => {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

let unknownWordAsStr = returnNewWord(SATWords);
console.log(typeof unknownWordAsStr);

let unknownWord = new Word(unknownWordAsStr);
console.log(unknownWord);

// let word = new Word('psychedelic');

// console.log(word);