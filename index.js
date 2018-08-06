const inquirer = require ('inquirer');

// Incorperate the other modules


// Start the prompts
var prompt = inquirer.createPromptModule();

function guessPrompt(){
    prompt({
        name: "guessedLetter",
        type: "input",
        message: "Please guess a letter in the word"        
    }).then(answers =>{
        // Send off the quessed letter
        
        console.log(answers);
        guessPrompt();
    });
}
guessPrompt();