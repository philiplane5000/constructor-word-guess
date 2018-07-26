let Letter = require('./letter');

module.exports = Word;

function Word(stringWord) {

    this.answer = stringWord;

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
        console.log(`\n${wordPlaceHolder}\n`);
    };

    this.deductGuessOrAlert = (guess) => {

        let decrement = true;
        let correctGuess = false;
        let previousGuess = false;

        this.objArray.forEach(function (letterObj) {
            if (letterObj.char === guess && letterObj.trueOrFalse === false) {
                correctGuess = true;
                decrement = false;
            } else if (letterObj.char === guess && letterObj.trueOrFalse === true) {
                previousGuess = true;
                decrement = false;
            }
        })
        if(correctGuess === true) {
            console.log(`\n CORRECT!`);
        }
        if (previousGuess === true) {
            console.log(`\n"${guess}" ... REALLY? `);
        }
        if(correctGuess !== true && previousGuess !== true) {
            console.log(`\n INCORRECT!`)
        }
        return decrement
    };

    this.checkGuess = (guess) => {
        this.objArray.forEach(function (letterObj) {
            letterObj.checkChar(guess)
        })
    };

    this.alertChampion = () => {
        let champion = true;

        this.objArray.forEach(function (letterObj) {
            if (letterObj.trueOrFalse === false) {
                champion = false;
            }
        })

        return champion
    }



}



