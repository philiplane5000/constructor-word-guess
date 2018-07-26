module.exports = Letter;

function Letter(char, trueOrFalse) {
    
    this.trueOrFalse = trueOrFalse;

    this.char = char.toLowerCase();


    this.toString = () => {
        if (this.trueOrFalse === false) {
            return "_";
        }
            return this.char;
    }

    this.checkChar = (guessedChar) => {
        if (guessedChar.toLowerCase() === this.char) {
            this.trueOrFalse = true; 
        } 
    }


}

