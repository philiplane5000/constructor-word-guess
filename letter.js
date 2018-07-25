module.exports = Letter;

function Letter(char, trueOrFalse) {

    let correctGuessTally = 0;
    
    this.trueOrFalse = trueOrFalse;

    this.char = char.toLowerCase();


    this.toString = () => {
        if (this.trueOrFalse === false) {
            return "_";
        } else {
            return this.char;
        }
    }

    this.checkChar = (guessedChar) => {
        if(guessedChar.toLowerCase() === this.char) {
            this.trueOrFalse = true; 
            correctGuessTally++;
        } 
    }


}

//if this doesnt work try creating character with default boolean of false --> then changin with same as before(?)

