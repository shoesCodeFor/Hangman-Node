const inquirer = require ('inquirer');

// Incorperate the other modules


// Start the prompts
var prompt = inquirer.createPromptModule();

function guessPrompt(){
    prompt({
        name: "guessedLetter",
        message: "Please guess a letter in the word"        
    }).then(console.log());
}