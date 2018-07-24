let Letter = require('./letter');

module.exports = Word;

function Word(stringWord) {

    this.charArray = stringWord.split('');

    this.objArray = [];

    this.generateObjFromChars = (emptyArray) => {

        stringWord.split('').forEach(function (letter) {
            emptyArray.push(new Letter(letter, false))
        })
    };

    this.generateObjFromChars(this.objArray);

    this.returnWordString = () => {
        placeHolder = "";
        this.objArray.forEach(function (letterObj) {
            placeHolder += letterObj.toString() + " ";
        })
        return placeHolder;
    };

    this.checkGuess = (guess) => {
        this.objArray.forEach(function (letterObj) {
            letterObj.checkChar(guess)
        })
    }

}



