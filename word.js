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
        console.log(wordPlaceHolder)
    };

    this.checkGuess = (guess) => {
        this.objArray.forEach(function (letterObj) {
            letterObj.checkChar(guess)
        })
    }

}



