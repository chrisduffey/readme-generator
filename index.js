// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./develop/utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Whats your title?",
        name: "title",
        // checks to see if input is made
        // check: (value) =>{if(value){return true}else {return 'Please enter a title.'}} ,
    },
    {
        type: "input",
        message: "What is your Task?",
        name:"task",
        

    },
    {
        type: "input",
        message: "What is your User Story?",
        name:"story",
        

    },
    {
        type: "input",
        message: "What is your Acceptance Criteria?",
        name:"criteria",
        

    },
    {
        type: "input",
        message: "How do you use your application?",
        name:"use",
        

    },
    {
        type: "input",
        message: "Whats your name?",
        name:"name",
    },
    {
        type: "input",
        message: "Whats your email?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your Github?",
        name: "git",
    },
    {
        type: "checkbox",
        message: "Please select license if used.",
        choices: [
            "MIT License",
            "General Pub License",
            "Mozilla Pub License",
            "Unlicense",
        ],
    }

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
     fs.writeFile(fileName, data, (err)=>{
        if (err) {
            console.error(err);
        }else {
            console.log('README created!!');
        }
     });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .createPromptModule(questions)
    .then((answers)=> {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
    })
    .catch((error)=> {
        console.error(error);
    });
}
    

// Function call to initialize app
init();
