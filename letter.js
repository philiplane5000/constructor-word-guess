module.exports = Letter;

function Letter(char, boolean) {
    this.char = char.toLowerCase();
    this.boolean = boolean;

    this.toString = () => {
        if (this.boolean === true) {
            // console.log(this.char);
            return this.char;
        } else {
            // console.log('_');
            return "_";
        }
    }

    this.checkChar = (guessedChar) => {
        (guessedChar.toLowerCase() === this.char) ? this.boolean = true : this.boolean = false;
        console.log(this.boolean);
    }


}

