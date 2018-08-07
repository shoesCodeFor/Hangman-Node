const inquirer = require ('inquirer');
const WordMod = require('./Word');
const LetterMod = require('./Letter');

var Word = new WordMod();
var Letter = new LetterMod();
Word.selectWord();
Letter.correctLetters = Word.fillLetters();

// Incorperate the other modules
var guessesRemaining = 10

// Start the prompts
var prompt = inquirer.createPromptModule();

function guessPrompt(){
    console.log(`Mystery Word: ${Word.unguessed}`);
    if(guessesRemaining > 0){
        prompt({
            name: "guessedLetter",
            type: "input",
            message: "Please guess a letter in the word"        
        }).then(answers =>{
            // Send off the quessed letter
            let char = answers.guessedLetter;
            if(Letter.correctLetters.includes(char)){
                console.log("Correcto!");
                while(Letter.correctLetters.includes(char)){
                    let letterIndex = Letter.correctLetters.indexOf(char);
                    Letter.correctLetters[letterIndex] = " ";
                    Word.unguessed = replaceAt(Word.unguessed, letterIndex * 2, `${char} `);
                    console.log(Word.unguessed);
                }
            }
            else{

            }
            console.log(answers);
            guessesRemaining--;
            guessPrompt();
        });
    }
    else{
        console.log("Game Over, thanks for playing!");
        console.log(`Your word was: `);
    }
}
guessPrompt();

function swapLetters(char){

}

function replaceAt(string, index, replace) {
    if(index == (string.length-1)){
        console.log('The last char')
    }
    var reply = string.substring(0, index) + replace + string.substring(index + 1);
    console.log(reply);
    return reply;


}