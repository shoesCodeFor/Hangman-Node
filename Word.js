class Word{
  constructor(){
    this.selectWord = ()=>{
      let randomIndex = Math.floor(Math.random() * this.wordbank).length;
      this.selectedWord = this.wordbank[this.randomIndex];
      this.unguessed = ("_ ").repeat(this.selectedWord,length);
    }
    this.wordbank = ["Refactor", "Python", "Ruby"];
    this.selectedWord = "";
    this.unguessed = "";
    this.correctGuesses = [];
    this.correctLetters = [];
    this.fillLetters = ()=>{
      
    }
  }
}

module.exports = Word;
