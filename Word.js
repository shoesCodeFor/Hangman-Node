class Word{
  constructor(){
    this.wordbank = ["refactor", "python", "ruby"];
    this.selectedWord = "";
    this.unguessed = "";
    this.correctGuesses = [];
    this.correctLetters = [];
    this.selectWord = ()=>{
      let randomIndex = Math.floor(Math.random() * this.wordbank.length);
      this.selectedWord = this.wordbank[randomIndex];
      this.unguessed = ("_ ").repeat(this.selectedWord.length);
    }
    this.fillLetters = ()=>{
      let theLetters = this.selectedWord.split("");
      return theLetters;
    }
  }
}
var aWord = new Word();
aWord.selectWord();
console.log(aWord.selectedWord);

module.exports = Word;
