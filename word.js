let Letter = require('./letter');

module.exports = Word;

function Word(stringWord) {

    // let wordPlaceHolder = "";

    this.charArray = stringWord.split('');

    this.objArray = [];

    this.generateObjFromChars = (emptyArray) => {

        stringWord.split('').forEach(function (letter) {
            emptyArray.push(new Letter(letter, false))
        })
    };

    this.generateObjFromChars(this.objArray);

    this.returnWordString = () => {
        wordPlaceHolder = ""
        this.objArray.forEach(function (letterObj) {
            wordPlaceHolder += letterObj.toString() + " ";
        })
        console.log(wordPlaceHolder);
    };

    this.deductOneGuessOrNot = (guess) => {

        let decrement = true;

        this.objArray.forEach(function (letterObj) {
            if (letterObj.char === guess && letterObj.trueOrFalse === false) {
                console.log('CORRECT GUESS!');
                decrement = false;
            } else if (letterObj.char === guess && letterObj.trueOrFalse === true) {
                console.log('YOU ALREADY GUESSED: ' + guess);
                decrement = false;
            } 
        }); 
        return decrement
    }

    this.checkGuess = (guess) => {
        this.objArray.forEach(function (letterObj) {
            letterObj.checkChar(guess)
        })
    };



}



