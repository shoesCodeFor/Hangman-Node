const inquirer = require ('inquirer');

// Incorperate the other modules
var guessesRemaining = 10

// Start the prompts
var prompt = inquirer.createPromptModule();

function guessPrompt(){
    console.log(`Mystery Word: `);
    if(guessesRemaining > 0){
        prompt({
            name: "guessedLetter",
            type: "input",
            message: "Please guess a letter in the word"        
        }).then(answers =>{
            // Send off the quessed letter
    
            console.log(answers);
            guessesRemaining--;
            guessPrompt();
        });
    }
    else{

    }
}
guessPrompt();