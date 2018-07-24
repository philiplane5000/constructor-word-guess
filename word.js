let Letter = require('./letter');

function Word(stringWord) {

    this.charArray = stringWord.split('');

    this.objArray = [];

    this.generateObjArrayFromCharArray = function (array, objArray) {

        array.forEach(function (letter, index) {
            let charObj = new Letter(letter, false);
            objArray.push(charObj);
        })
    };

    this.generateObjArrayFromCharArray(this.charArray, this.objArray);

}

let word = new Word('anthropomorphism');

console.log(word.objArray[0].checkChar('a'));
console.log(word.objArray[0].returnChar());



