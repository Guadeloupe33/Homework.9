// TODO: Include packages needed for this application\
const inquirer = require ('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [];
inquirer
.prompt(  [
    {
        type: 'input',
        message: 'What is the name of your project Name of project ?',
        name: ' project',
    },

    {
        type: 'input',
        message: 'What is the description of your project? ',
        name: ' description',
    },
    {
        type: 'input',
        message: 'How do you install your project?',
        name: ' install',
    },
    {
        type: 'input',
        message: 'Please provide some usage information? ',
        name: ' usage',
    },
    {
        type: 'input',
        message: 'Contribution guidelines? ',
        name: ' contribution',
    },
    {
        type: 'checkbox',
        message: 'Please select a license:',
        name: ' license',
        choices: [ 'BSD','MIT','GPL'],
    },
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();