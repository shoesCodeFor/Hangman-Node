class Word{
  constructor(){
    this.wordbank = ["refactor", "python", "ruby"];
    this.selectedWord = "";
    this.unguessed = "";
    this.answerWord = "";
    this.correctGuesses = [];
    this.correctLetters = [];
    this.selectWord = ()=>{
      let randomIndex = Math.floor(Math.random() * this.wordbank.length);
      this.selectedWord = this.wordbank[randomIndex];
      this.unguessed = ("_ ").repeat(this.selectedWord.length);
      this.answerWord = (" ").repeat(this.selectedWord.length);
    }
    this.fillLetters = ()=>{
      let theLetters = this.selectedWord.split("");
      return theLetters;
    }
  }
}


module.exports = Word;
