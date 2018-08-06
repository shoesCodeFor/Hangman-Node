class Letter{
  constructor(){
    this.unguessed = "";
    this.correctGuesses = [];
    this.correctLetters = [];
    this.guessLetter = char =>{
      if(this.correctLetters.includes(char))
      {
        console.log("correct");
      }
    }
  }
}

module.exports = Letter;
