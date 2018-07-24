let Letter = require('./letter');

module.exports = Word;

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





