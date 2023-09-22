// TODO: Include packages needed for this application\
const inquirer = require ('inquirer');
const fs = require('fs');
const generateReadMe = ( {project, description, install, usage, contribution, license}) =>
``

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
        choices: [ 
            {
             name: 'BSD',
             value: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)' ,  
            },
            {
                name:'MIT',
                value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            },
            {
                name:'GPL',
                value: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
            }

            
            ],
    },
])
.then( (response)=> {
    console.log( response);
    fs.writeFile('readMe.txt', JSON.stringify(response),(err) =>
    err ? console.error(err) : console.log('sucess !'))
}
);
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();