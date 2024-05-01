// TODO: Include packages needed for this application
// file system
const fs = require ('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./develop/utils/generateMarkdown');
const validate = (value) => {if(value){return true}else {return 'Please enter a value.'}} 

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Whats your title?",
        name: "title",
        validate: (value)=>validate(value),
        
    },
    {
        type: "input",
        message: "Provide a Description?",
        name:"task",
        validate: (value)=>validate(value),
        

    },
    {
        type: "input",
        message: "What is your User Story?",
        name:"story",
        validate: (value)=>validate(value),
        

    },
    {
        type: "input",
        message: "What is your Acceptance Criteria?",
        name:"criteria",
        validate: (value)=>validate(value),
        

    },
    {
        type: "input",
        message: "How do you use your application?",
        name:"use",
        validate: (value)=>validate(value),
        

    },
    {
        type: "input",
        message: "Whats your name?",
        name:"name",
        validate: (value)=>validate(value),
    },
    {
        type: "input",
        message: "Whats your email?",
        name: "email",
        validate: (value)=>validate(value),
    },
    {
        type: "input",
        message: "What is your Github?",
        name: "git",
        validate: (value)=>validate(value),
    },
    {
        type: "list",
        message: "Please select license if used.",
        name: "license",
        choices: [
            "MIT",
            "Apache",
            "Mozilla",
            "IBM",
            "None",
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
    .prompt(questions)
    .then((answers)=> {
        const readmeContent = generateMarkdown(answers);
        writeToFile('dist/README.md', readmeContent);
    })
    .catch((error)=> {
        console.error(error);
    });
}
    

// Function call to initialize app
init();
